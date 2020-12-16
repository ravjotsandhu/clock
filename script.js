setInterval(()=>{
    date=new Date()
    hr=date.getHours()
    min=date.getMinutes()
    sec=date.getSeconds()
    hourRotation=30*hr+min/12
    minRotation=6*min
    secRotation=6*sec
    hour.style.transform=`rotate(${hourRotation}deg)`
    minute.style.transform=`rotate(${minRotation}deg)`
    second.style.transform=`rotate(${secRotation}deg)`
},1000)