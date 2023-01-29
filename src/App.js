import './App.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2'



function App() {

  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")

  const [URL, setURL] = useState("")
 
  function displayResult(score, persona){

    if ((score > 0) && (score < 9)) {
      setTitle("Not Yet Ready for an Online Experience")
      setDescription(persona + " is not ready to participate in an online experience yet. He/She will need a lot of support.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1039575599842344970/Face_to_face-pana.png")
    }

    if ((score > 8) && (score < 17)) {
      setTitle("Almost Ready for an Online Experience")
      setDescription(persona + " is almost ready to participate in an online experience based on his/her skills, access to technology and preferences, but may need some support.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1039578144023248906/Telecommuting-pana.png")
    }

    if ((score > 16) && (score < 25)) {
      setTitle("Ready for an Online Experience")
      setDescription(persona + " is ready to participate in an online experience based on his/her skills, access to technology and preferences.")
      setURL("https://cdn.discordapp.com/attachments/1016745958727491615/1039578191385337866/Done-pana.png")
    }
  }

  const clickAnswer = () => {
    setTitle("")
    setDescription("")
    setURL("")
  }

  const checkAnswer = (event) => {
    event.preventDefault()
    const persona = document.querySelector('input[name="persona"]').value
    const num1 = document.querySelector('input[name="statement_1"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_1"]:checked').value) : 0
    const num2 = document.querySelector('input[name="statement_2"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_2"]:checked').value) : 0
    const num3 = document.querySelector('input[name="statement_3"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_3"]:checked').value) : 0
    const num4 = document.querySelector('input[name="statement_4"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_4"]:checked').value) : 0
    const num5 = document.querySelector('input[name="statement_5"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_5"]:checked').value) : 0
    const num6 = document.querySelector('input[name="statement_6"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_6"]:checked').value) : 0
    const num7 = document.querySelector('input[name="statement_7"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_7"]:checked').value) : 0
    const num8 = document.querySelector('input[name="statement_8"]:checked') ? Number.parseInt(document.querySelector('input[name="statement_8"]:checked').value) : 0
    const score = num1+num2+num3+num4+num5+num6+num7+num8

    if (persona === ""){
      return Swal.fire({
        icon: "warning",
        title: "Oops! Please enter your persona's name.",
        color: "#000000",
        confirmButtonColor: "#006699"})
    }

    let forgetAlert = ""

    if (num1 === 0) {
      forgetAlert = "Q#1"
    }

    if (num2 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#2" : forgetAlert + ", Q#2"
    }

    if (num3 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#3" : forgetAlert + ", Q#3"
    }

    if (num4 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#4" : forgetAlert + ", Q#4"
    }

    if (num5 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#5" : forgetAlert + ", Q#5"
    }

    if (num6 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#6" : forgetAlert + ", Q#6"
    }

    if (num7 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#7" : forgetAlert + ", Q#7"
    }

    if (num8 === 0) {
      forgetAlert = forgetAlert === "" ? "Q#8" : forgetAlert + ", Q#8"
    }

    if (forgetAlert.length > 3){
      forgetAlert = forgetAlert.slice(0, -5) + " and" + forgetAlert.slice(forgetAlert.length-4)
    }

    if ((num1 === 0) || (num2 === 0) || (num3 === 0) || (num4 === 0) ||
    (num5 === 0) || (num6 === 0) || (num7 === 0) || (num8 === 0)){
      return Swal.fire({
        icon: "warning",
        title: "Oops! Please answer " + forgetAlert + ".",
        color: "#000000",
        confirmButtonColor: "#006699"})
    }

    displayResult(score, persona)
  }

  const refreshPage = () => { 
    window.location.reload() 
  }


  return (
    <form>
      <div className="header">
        
        <div className="header-brand">
          <img src="https://cdn.discordapp.com/attachments/1016745958727491615/1038108674368995490/nych_logo_transparent.png" alt="NYCH logo" />
        </div>
        
        <div className="header-text">
          <p>Rubric for Online</p>
          <p>Experience Readiness</p>
        </div>
      </div>

      <div className="header-data">
        <div className="name">
            <label for="name"><strong>Persona:</strong></label>
            <input type="text" name="persona" id="persona"/>
        </div>
      </div>

        <div className="statement">
            <label for="statement_1">
            1. My persona is ______ to be interested in participating in an online experience.
            </label>
        </div>
      
        <div className="options">
          <div className="option">      
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="highly" value="3" />
            <label for="highly">
            <strong>highly likely</strong>
            </label>
          </div>

          <div className="option">
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="likely" value="2" />
            <label for="likely">
            <strong>likely</strong>
            </label>
          </div>

          <div className="option">
            <input type="radio" onClick={clickAnswer} name="statement_1" className="statement_1" id="unlikely" value="1" />
            <label for="unlikely">
            <strong>unlikely</strong>
            </label>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_2">
           2. My persona's level of prior online learning experience is ______.
            </label>
          </div>

          <div className="options">
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="high_2" value="3" />
              <label for="high_2">
              <strong>high</strong> - they have attended a Zoom workshop AND completed an online course/training
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="moderate_2" value="2" />
              <label for="moderate_2">
              <strong>moderate</strong> - they have attended a Zoom workshop OR completed an online course/training
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_2" id="low_2" value="1" />
              <label for="low_2">
              <strong>low</strong> - they haven't attended a Zoom workshop NOR completed an online course/training
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_3">
            3. My persona has most access to ______. 
            </label>
          </div>

          <div className="options">
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="desk_lap" value="3" />
              <label for="desk_lap">
              <strong>desktop/laptop</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="tablet" value="2" />
              <label for="tablet">
              <strong>tablet</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_3" id="smartphone" value="1" />
              <label for="smartphone">
              <strong>smartphone</strong>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_4">
            4. My persona's Internet connection is _________. 
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="strong" value="3" />
              <label for="strong">
              <strong>strong and/or reliable</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="good" value="2" />
              <label for="good">
              <strong>good</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_4" id="weak" value="1" />
              <label for="weak">
              <strong>weak and/or limited</strong>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_5">
            5. My persona's learning space is ______. 
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="ideal" value="3" />
              <label for="ideal">
              <strong>ideal</strong> - they always or often have access to a quiet space
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="good" value="2" />
              <label for="good">
              <strong>good enough</strong> - they sometimes have access to a quiet space
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_5" id="not_ideal" value="1" />
              <label for="not_ideal">
              <strong>not ideal</strong> - they seldom or never have access to a quiet space
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_6">
            6. My persona's digital skills are ______.  
            </label>
          </div>

          <div className="options">  
            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="high_6" value="3" />
              <label for="high_6">
              <strong>high</strong> - can do basic computer tasks easily
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="moderate_6" value="2" />
              <label for="moderate_6">
              <strong>moderate</strong> - can do basic computer tasks but with some support
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_6" id="low_6" value="1" />
              <label for="low_6">
              <strong>low</strong> - can't do basic computer tasks
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_7">
            7. My persona's interest in learning new technologies is ______.  
            </label>
          </div>
          
          <div className="options">
            <div className="option">  
              <input type="radio" onClick={clickAnswer} name="statement_7" id="high_7" value="3" />
              <label for="high_7">
              <strong>high</strong> - likes learning new technologies and learns easily
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_7" id="moderate_7" value="2" />
              <label for="moderate_7">
              <strong>moderate</strong> - likes learning new technologies and learns with some support
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_7" id="low_7" value="1" />
              <label for="low_7">
              <strong>low</strong> - doesn't like learning new technologies
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="statement">
            <label for="statement_8">
            8. My persona can follow written instructions _______.   
            </label>
          </div>

          <div className="options">
            <div className="option">  
              <input type="radio" onClick={clickAnswer} name="statement_8" id="easily" value="3" />
              <label for="easily">
              <strong>easily</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_8" id="mid" value="2" />
              <label for="mid">
              <strong>with some support</strong>
              </label>
            </div>

            <div className="option">
              <input type="radio" onClick={clickAnswer} name="statement_8" id="difficulty" value="1" />
              <label for="difficulty">
              <strong>with difficulty</strong>
              </label>
            </div>
          </div>
        </div>
        {title === "" ?
        
        <div className="button">
          <button className="button-send-clear" type="submit" onClick={checkAnswer}>
          SEND
          </button>
        </div> :
        
        <div className="result">
          <div className="text-box">
            <p className="title"><strong>{title}</strong></p>
            <p className="description">{description}</p>
          </div>
            <img className="figure-text" alt="illustration" src={URL} />
            <button className="button-send-clear" onClick={refreshPage}>
            CLEAR
            </button>
        </div>
        }
        
    </form>
  );
}

export default App;