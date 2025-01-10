import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { slug: string } }) {
    try {
        const body = await req.json();
        const { user, comment } = body;

        if (!user || !comment) {
            return NextResponse.json(
                { error: 'User and comment are required.' },
                { status: 400 }
            );
        }

        // Simulate saving the comment (replace with actual DB logic)
        console.log(`Comment received for blog "${params.slug}":`, { user, comment });

        return NextResponse.json({ message: 'Comment submitted successfully.' });
    } catch (error) {
        console.error('Error in POST /api/Blogs/[slug]/comment:', error);
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 }
        );
    }
}
