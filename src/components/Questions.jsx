import React from 'react'
import "../styles/Questions.css"
function Questions(params) {
  const questions = [
    {id : 1 , question:  "Design a web page to show your college and its departments details using basic text formatting tags"},
    {id : 2 , question: "Design a webpage to show image as link (include two different links)"},
    {id : 3 , question: "Create a webpage to show photo album (minimum 4 photos)."},
    {id : 4 , question: "Divide a webpage into 3 parts using frames and inclue a background image, table and a hyperlink in the parts."},
    {id : 5 , question: "Design a web page to show the product details of a computer, printer and scanner with images"},
    // {id : 6 , question: "Create a webpage for student registration form ( include address, gender(radio button), qualification(selectbox), languages known(checkbox) )"},
    // {id : 7 , question: "Crete a web page to show details (Fee, Duration etc.,) of courses offered by your college using hyperlink(give links to navigate to next, previous and home pages)"},
    // {id : 8 , question: "Create a webpage to show university infrastructure using table tag"},
    // {id : 9 , question: "Display drinks menu (Hot Drinks and Cool drinks) in restaurant using definition list."},
    // {id : 10, question: "Display webpage to show tri color flag using div tag (use primary colors)"},
    // {id : 11, question: "Design a webpage to display syllabus of your course using list tag.(use ordered, unordered format as main, sub main and sub- sub main and use numbers special types of bullets in appropriate places)"},
    // {id : 12, question: "Create web page to show page link, file link, and external link"},
    // {id : 13, question: "Design a webpage using internal style sheet for setting styles to heading, body and table"}
  ]

  return (
    <div className="Questions-container">
      <div className='Questions'>
      <h1>HTML Questions</h1>
      <table>
        <th>Question</th>
        {questions.map(item => (
        <tr key={item.id}>
          <td className='question-card'>{item.question}</td>
        </tr>
      ))}
      </table>
    </div>
    </div>
  )
}

export default Questions