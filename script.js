baseinp = document.getElementById("baseinp");
outputinp = document.getElementById("outputinp");

let html = `
<div class="form1">
<span>Is the Science Divided into Physics,Chemistry and Biology if Yes Enter <b>Y</b> else enter <b>'N'</b></span>
<input type="text" name="ass" id="ass" > <br> <br>
<span>Is the Total marks Same for all Subjects if Yes Enter <b>Y</b> else enter <b>'N'</b></span>
<input type="text" id = "ams" name="ams" > <br> <br>
<button id="submit1" onclick="submit()">Submit</button>
</div>
`

baseinp.innerHTML=html


function submit(){
  ass = document.getElementById("ass").value;
  ams = document.getElementById("ams").value;
  html1 = `
        <div class="form2">
        <span>Enter the Name of the Student</span>
        <input type="text" id="names" name="" value=""> <br><br>
        <span>Enter the Roll Number of the Student</span>
        <input type="number" name="" id="rollno"><br><br>
        <button type="button" name="button" id = "submit2" onclick="submitt()">Submit</button>
      </div>`
    baseinp.innerHTML = html1
}

function submitt(){
  names = document.getElementById("names").value;
  rollno = document.getElementById("rollno").value;
  if (ass == "Y") {
    html2= `
    <div class="form3" id = "form3m">
    <span>Enter the Marks Scored in Physics </span>
    <input type="number" id="phym"  value=""><br> <br>
    <span>Enter the Marks Scored in Chemistry</spar>
    <input type="number" id="chemm" value=""> <br><br>
    <span>Enter the Marks Scored in Biology </span>
    <input type="number" id="biom" value=""><br><br>
    <span>Enter the marks Scored in Mathematics </span>
    <input type="number" name="" id="mathm" value=""><br><br>
    <span>Enter the marks Scored in Social Science</span>
    <input type="number" name="" id="ssm" value=""><br><br>
    <span>Enter the marks Scored in First Language </span>
    <input type="number" name="" id="flm" value=""><br><br>
    <span>Enter the marks Scored in Second Language</span>
    <input type="number" name="" id="slm" value=""><br><br>
    </div>
    `

      if (ams=="N"){
        html2 += `
        <div class="form3" id = "form3s1">
        <span>Enter the Total Marks Physics Exam was Conducted for</span>
        <input type="number" name="" id="phytm"><br><br>
        <span>Enter the Total Marks Chemistry Exam was Conducted for</span>
        <input type="number" name="" id="chemtm"><br><br>
        <span>Enter the Total Marks Bilogy Exam was Conducted for</span>
        <input type="number" name="" id="biotm"><br><br>
        <span>Enter the Total Marks Mathematics Exam was Conducted for</span>
        <input type="number" name="" id="mathtm"><br><br>
        <span>Enter the Total Marks Social Science Exam was Conducted for</span>
        <input type="number" name="" id="sstm"><br><br>
        <span>Enter the Total Marks First Language Exam was Conducted for</span>
        <input type="number" name="" id="fltm"><br><br>
        <span>Enter the Total Marks Second Language Exam was Conducted for</span>
        <input type="number" name="" id="sltm"><br><br>
        </div>`;
      }
      if (ams=="Y") {
        html2 += `
        <div class="form3" id="form3s3">
        <br>
        <span>Enter the Toal Marks all Exam were Conducted for</span>
        <input type="number" id="totalm"><br>
        </div>`;
      }
      html2 += `<button id="submit3" onclick="submit_fo()">Submit</button>`;
      baseinp.innerHTML=html2
   }

  if (ass=="N") {
    html3 = `
    <div class="form4" id id="form4m">
    <span>Enter the Marks scored in Science </span>
    <input type="number" id = "scim"><br><br>
    <span>Enter the marks Scored in Mathematics </span>
    <input type="number" name="" id="mathm" value=""><br><br>
    <span>Enter the marks Scored in Social Science</span>
    <input type="number" name="" id="ssm" value=""><br><br>
    <span>Enter the marks Scored in First Language </span>
    <input type="number" name="" id="flm" value=""><br><br>
    <span>Enter the marks Scored in Second Language</span>
    <input type="number" name="" id="slm" value=""><br><br>
    </div>
    `;

    if (ams=="N") {
      html3 += `
      <div class="form4" id ="form4s1">
      <span>Enter the Total Marks Science Exam was Conducted for</span>
      <input type="number" name="" id="scitm"><br><br>
      <span>Enter the Total Marks Mathematics Exam was Conducted for</span>
      <input type="number" name="" id="mathtm"><br><br>
      <span>Enter the Total Marks Social Science Exam was Conducted for</span>
      <input type="number" name="" id="sstm"><br><br>
      <span>Enter the Total Marks First Language Exam was Conducted for</span>
      <input type="number" name="" id="fltm"><br><br>
      <span>Enter the Total Marks Second Language Exam was Conducted for</span>
      <input type="number" name="" id="sltm"><br><br>
      </div>`;
    }

    if (ams=="Y") {
      html3 += `
      <div class="form4" id ="form4s2">
      <br>
      <span>Enter the Toal Marks all Exam were Conducted for</span>
      <input type="number" id="totalm"><br><br>
      </div>`;
    }
    html3 += `<button id="submit4" onclick="submit_fo()">Submit</button>`;
    baseinp.innerHTML = html3;
  }
}

function submit_fo() {
  mathm = document.getElementById("mathm").value;
  ssm = document.getElementById("ssm").value;
  flm = document.getElementById("flm").value;
  slm = document.getElementById("slm").value;
  if (ass == "Y") {
    phym = document.getElementById("phym").value;
    chemm = document.getElementById("chemm").value;
    biom = document.getElementById("biom").value;

    if (ams == "N") {
      phytm = document.getElementById("phytm").value;
      chemtm = document.getElementById("chemtm").value;
      biotm = document.getElementById("biotm").value;
      mathtm = document.getElementById("mathtm").value;
      sstm = document.getElementById("sstm").value;
      fltm = document.getElementById("fltm").value;
      sltm = document.getElementById("sltm").value;
    }
    if (ams == "Y") {
      a = document.getElementById("totalm");
      phytm = a;
      chemtm = a;
      biotm = a;
      mathtm = a;
      sstm = a;
      fltm = a;
      sltm = a;
    }
    // Calculating the Percentage
    phyp = (phym / phytm) * 100;
    chemp = (chemm / chemtm) * 100;
    biop = (biom / biotm) * 100;
    mathp = (mathm / mathtm) * 100;
    ssp = (ssm / sstm) * 100;
    firstlp = (flm / fltm) * 100;
    secondlp = (slm / sltm) * 100;

    html4 = `
        <p>The Name of the Student is ${names}<br>
        The Roll Number of the Student is ${rollno}<br><br>

        The Marks Scored by ${names} in Physics is ${phym} out of ${phytm}<br>
        The Total Percentage of the Student in Physics is ${phyp}<br><br>

        The Marks Scored by ${names} in Biology is ${biom} out of ${biotm}<br>
        The Total Percentage of the Student in Biology is ${biop}<br><br>

        The Marks Scored by ${names} in Chemistry is ${chemm} out of ${chemtm}<br>
        The Total Percentage of the Student in Chemistry is ${chemp}<br><br>

        The Marks Scored by ${names} in Mathematics is ${mathm} out of ${mathtm}<br>
        The Total Percentage of the Student in Mathematics is ${mathp}<br><br>
        
        The Marks Scored by ${names} in Social Science is ${ssm} out of ${sstm}<br>
        The Total Percentage of the Student in Social Science is ${ssp}<br><br>

        The Marks Scored by ${names} in First Language is ${flm} out of ${fltm}<br>
        The Total Percentage of the Student in First Language is ${firstlp}<br><br>

        The Marks Scored by ${names} in Second Language is ${slm} out of ${sltm}<br>
        The Total Percentage of the Student in Second Language is ${secondlp}<br><br>
    `;
    outputinp.innerHTML = html4;
  }

  if (ass == "N") {
    scim = document.getElementById("scim");

    if (ams == "N") {
      scitm = document.getElementById("scitm").value;
      mathtm = document.getElementById("mathtm").value;
      sstm = document.getElementById("sstm").value;
      fltm = document.getElementById("fltm").value;
      sltm = document.getElementById("sltm").value;
    }

    if (ams == "Y") {
      b = document.getElementById("totalm");
      scitm = b;
      mathtm = b;
      sstm = b;
      fltm = b;
      sltm = b;
    }
    scip = (scim / scitm) * 100;
    mathp = (mathm / mathtm) * 100;
    ssp = (ssm / sstm) * 100;
    firstlp = (flm / fltm) * 100;
    secondlp = (slm / sltm) * 100;

    html5 = `
      <p>The Name of the Student is ${names}<br>
      The Roll Number of the Student is ${rollno}<br><br>

      The Marks Scored by ${names} in Science is ${scim} out of ${scitm}<br>
      The Total Percentage of the Student in Science is ${scip}<br><br>

      The Marks Scored by ${names} in Mathematics is ${mathm} out of ${mathtm}<br>
      The Total Percentage of the Student in Mathematics is ${mathp}<br><br>
      
      The Marks Scored by ${names} in Social Science is ${ssm} out of ${sstm}<br>
      The Total Percentage of the Student in Social Science is ${ssp}<br><br>

      The Marks Scored by ${names} in First Language is ${flm} out of ${fltm}<br>
      The Total Percentage of the Student in First Language is ${firstlp}<br><br>

      The Marks Scored by ${names} in Second Language is ${slm} out of ${sltm}<br>
      The Total Percentage of the Student in Second Language is ${secondlp}<br><br></br>`;

    outputinp.innerHTML = html5;
  }
}