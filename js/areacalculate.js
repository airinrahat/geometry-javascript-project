
// triangle
function calculateTriangleArea(){

        // get triangle base value
        const baseField =document.getElementById('triangle-base');
       const baseValueText=baseField.value;
       const base =parseFloat(baseValueText);
       

    //    get triangle height value

    const heightField = document.getElementById('triangle-height');
   
    const heightValueText=heightField.value;
    const height=parseFloat(heightValueText);
   
    const area=0.5*base*height;
    

    // show triangle area
    const areaSpan=document.getElementById('triangle-area');
    areaSpan.innerText=area;
       
}

// rectangle
function calculateRectangleArea(){

    // get rectangle width value
    const widthField =document.getElementById('rectangle-width');
    const widthValueText=widthField.value;
    const widthValue=parseFloat(widthValueText);

   // get rectangle width value

   const  rectangleHeightField=document.getElementById('rectangle-height');
   const rectangleHeightValueText=rectangleHeightField.value;
   const rectangleHeight=parseFloat(rectangleHeightValueText);

   const rectangleArea=widthValue * rectangleHeight;
 



//    show rectangle area
 const rectangleAreaSpan=document.getElementById('rectangle-area')
  rectangleAreaSpan.innerText=rectangleArea;

}


// reusable function
function  calculateParallelogramArea(){
  const base =getInputValue('parallelogram-base');
  console.log(base);
  const height=getInputValue('parallelogram-height');
  console.log(height);
  const area = base * height;
  setElementInnerText('parallelogram-area',area)
  

}




function calculateEllipseArea(){
  const majorRadius=getInputValue('ellipse-major-radius');
  const minorRadius=getInputValue('ellipse-minor-radius');
  const area= Math.PI *majorRadius*minorRadius;
  setElementInnerText('ellipse-area',area)
}
// reusable get input value
function getInputValue(fieldId){
  const inputField =document.getElementById(fieldId);
  const inputValueText=inputField.value;
  const value=parseFloat(inputValueText);
  return value;

}

// reusable set text
function setElementInnerText(elementId, area){
  const element=document.getElementById( elementId);
  element.innerText=area;

}