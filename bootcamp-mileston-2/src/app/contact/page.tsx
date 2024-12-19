export default function Contact() {
    return (
          <div className = 'contact'>
            
            <h1>Contact</h1>
            <form id="contact form">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" />
                <label htmlFor="name">Email: </label>
                <input type="email" id="email" />
                <label htmlFor="name">Message: </label>
                <textarea defaultValue={""} />
                <input type="submit" />
            </form>

          </div>
          ) 
  }