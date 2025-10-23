 export const rockpaper = () => {
  // Боломжит сонголтууд
  const choices = ["haich", "chuluu", "daawuu"];

  // Хэрэглэгчээс сонголт авах
  const userValue = window.prompt("Хайч, чулуу, эсвэл даавуу гэж бичнэ үү? (haich/chuluu/daawuu)");

  // Хэрвээ хэрэглэгч буруу зүйл бичвэл дахин асууна
  if (!choices.includes(userValue)) {
    alert("Буруу сонголт! Зөвхөн haich, chuluu, эсвэл daawuu гэж бичнэ үү.");
    return rockpaper();
  }

  // Компьютерийн санамсаргүй сонголт
  const computerValue = choices[Math.floor(Math.random() * choices.length)];

  // Ялагчийг тодорхойлох
  let isWin = false;
  if (
    (userValue === "haich" && computerValue === "daawuu") 
    (userValue === "chuluu" && computerValue === "haich") 
    (userValue === "daawuu" && computerValue === "chuluu")
  ) {
    isWin = true;
  }

  // Үр дүнг харуулах
//   alert(Та: ${userValue} | Компьютер: ${computerValue});
  console.log(userValue ,computerValue)

  if (userValue === computerValue) {
    alert("Тэнцлээ!");
  } else if (isWin) {
    alert("Та хожлоо! ");
  } else {
    alert("Та хожигдлоо ");
  }

  // Тоглоомын үр дүнг буцаана
  return {
    isWin,
    name: "rockpaper",
    metadata: {
      uservalue: userValue,
      computervalue: computerValue,
    },
  };
};