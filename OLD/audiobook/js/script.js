const starMinSize = 0;
const starMaxSize = 50;
const starMinCount = 50;
const starMaxCount = 100;

const starColor =	[
  'rgba(250, 56, 93, 0.4)',
  'rgba(245, 121, 77, 0.4)',
  'rgba(100, 204, 187, 0.4)',
  'rgba(242, 143, 187, 0.4)',
  'rgba(247, 187, 78, 0.4)',
  'rgba(62, 153, 237, 0.4)'
];

const starField = document.querySelector(".ab-circle");

const screenWidth = starField.offsetWidth;
const screenHeight = starField.offsetHeight;

const generate = () => {
  
	const count = (Math.floor( (Math.random() * (starMaxCount - starMinCount)) )) + starMinCount;

	let starLoop = 1;
  
	while (starLoop < count) {
		const size = (Math.floor( (Math.random() *
      (starMaxSize - starMinSize)) )) +
      (starMinSize + 1);
    
		const left = Math.floor(Math.random() * screenWidth);
		const top = Math.floor(Math.random() * screenHeight);
		const color = Math.floor(Math.random() * (starColor.length) );     
		const animationTime = Math.random() * 3 + 1;
    const animationDelay = Math.random();

		starField.innerHTML +=
			'<div class="star" ' +
      'style="width:' + size + 'px;' +
      'height:' + size + 'px;' +
			'left:' + left + 'px;' +
      'top:' + top + 'px;' +
			'opacity: 0.25;' +
      'background-color:' + starColor[color] + ';' +
			'box-shadow:' +
        starColor[color] + ' 0 0 ' + size*.3 + 'rem,' +
        starColor[color] + ' 0 0 ' + size*.1 + 'rem, ' +
        'inset ' + starColor[color] + ' 0 0 ' + size*.03 + 'rem;"></div>';

		starLoop++;
	}
}

generate();