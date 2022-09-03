var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>89501060783</label></div> </a> <a href='daffayudhistira93@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/DEFF1602'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/6289501060783'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Daffa'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/deff.xyz'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/DEFF' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Daffa Resume.pdf</label></div><a href='assets/Resume.pdf' download='DEFF_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>'Jakarta'<br>JakBar<br>Kebon Jeruk, KebonJeruk INDONESIA 11530</address>";

var senen = `[----JADWAL SENEN----]<br>B. INDONESIA<br>BK<br>MTK<br>P5`
var selasa = `[----JADWAL SELASA---]<br>PJOK<br>SOSIOLOGI<br>BAHASA INGGRIS<br>BIOLOGI<br>FISIKA`
var rabu = `[----JADWAL RABU----]<br>PRAMUKA<br>PPKN<br>EKONOMI<br>KIMIA<br>PKWU<br>`
var kamis = `[----JADWAL KAMIS----]<br>INFORMATIKA<br>SEJARAH<br>GEOGRAFI<br>AGAMA<br>`
var jumat = `[----JADWAL JUMAT----]<br>PPPPP<br>PPPPP<br>PPPPP<br>PPPPP<br>PPPPP`
var info = `[----INGFO INGFO----]<br><br>HARI SENIN MEMBAWA BAJU OLAHRAGA<br><br>HARI SENIN-RABU MEMBAWA AL QURAN<br><br>HARI KAMIS MEMBAWA NOVEL`
var about = `ABOUT<br><br>Dev : Daffa.Y <br><br>Cuma modal nyolong di github<br><br>Gw gabisa ngoding`


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
            sendTextMessage("<span class='sk'>Kirim Perintah berikut untuk tahu mapel<br>e.g<br><span class='bold'>'#senen'</span> - Untuk tahu mapel hari senen<br><span class='bold'>'#selasa'</span> - Untuk tahu mapel hari selasa<br><span class='bold'>'#rabu'</span> - untuk tahu mapel hari rabu<br><span class='bold'>'#kamis'</span> - untuk tahu mapel hari kamis<br><span class='bold'>'#jumat'</span> - untuk tahu mapel hari jumat<br><span class='bold'>'#info'</span> - untuk mengetahui jadwal penting<br><span class='bold'>'#clear'</span> - Buat ngebersihin chatan lu ama gwehj<br><span class='bold'>'#about'</span> - Yg ngelola web ini ya dek</span>");
            }, 2000);
            break;
        

        case "#senen":
            sendTextMessage(senen);
            break;
        case "#selasa":
            sendTextMessage(selasa);
            break;
        case "#rabu":
            sendTextMessage(rabu);
            break;
        case "#kamis":
            sendTextMessage(kamis);
            break;
        case "#jumat":
            sendTextMessage(jumat);
            break;
        case "#info":
            sendTextMessage(info);
            break;
        case "#about":
            sendTextMessage(about);
            break;

        case "#clear":
            clearChat();
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Gwe gabisa lu ajak ngobrol <br>Ketik perintah sesuai yg diatas aja dek<br>misalnya ketik #senen<br>buat nampilin jadwal hari senen");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
