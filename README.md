**#studybuddy**
_About the Project :-_
- Create a platform where students can find study partners or join study groups based on their subjects, courses, or interests. The platform should facilitate collaboration, resource sharing, and mutual support among students.
- By leveraging the power of interactive quizzes this also facillates a quizapp which will be helpful to students to test their knowledge on various subjects such as science, history, pop culture, and many more.A student looking to reinforce learning, or someone who simply loves a good challenge, our app has something for everyone.
  First we have to create a form in the website where students will register for the event.
  <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        fieldset{
            border-radius: 5px;
        }
        legend{
            margin: auto;
        }
    </style>
  </head>
<body>
    <form>
    <fieldset>
        <legend>-----------------------------------Student Registration Form---------------------------------</legend>
        Name : <input type="text"  name="Username"><br><br>

        Roll no. :<input type="number,text" name="roll no."><br><br>

        E mail:<input type="email" name="Email"><br><br>

        Gender : <input type="radio" name="gender">MALE
        <input type="radio" name="gender">FEMALE
        <input type="radio" name="gender">OTHER<br><br>

        MOBILE :<select>
            <option value="977">+98</option><option value="991">+91</option>
        </select> 
        <input type="number" name="number"><br><br>

        DOB :<input type="date" name="date"><br><br>

        Are You Intrested :<input type="checkbox" name="checkbox"><br><br>
	Favourite Subjects You are intrested In :<input type="checkbox" name="eligibility">Physics
	<input type="checkbox" name="eligibility">Mathematics
	<input type="checkbox" name="eligibility">Chemistry
	<input type="checkbox" name="eligibility">Art
	<input type="checkbox" name="eligibility">Coding
	<input type="checkbox" name="eligibility">Biology
	<input type="checkbox" name="eligibility">Philosophy <br><br>

	Passport Size Photo : <input type= "file"> <br><br> 
        Upload your aadhar : <input type="file"><br><br>

        STATE :<input type="checkbox" name="eligibility">Maharastra
        <input type="checkbox" name="eligibility">Odisha
        <input type="checkbox" name="eligibility">Uttar Pradesh
        <input type="checkbox" name="eligibility">Bihar
	<input type="checkbox" name="eligibility">Madhya Pradesh
        <input type="checkbox" name="eligibility">Andhra Pradesh
	<input type="checkbox" name="eligibility">Telengana
        <input type="checkbox" name="eligibility">Kerala
	<input type="checkbox" name="eligibility">Goa
        <input type="checkbox" name="eligibility">Karnataka
	<input type="checkbox" name="eligibility">Tamilnadu
        <input type="checkbox" name="eligibility">Rajasthan
	<input type="checkbox" name="eligibility">Haryana
        <input type="checkbox" name="eligibility">Punjab
	<input type="checkbox" name="eligibility">Assam
        <input type="checkbox" name="eligibility">West Bengal
	<input type="checkbox" name="eligibility">Meghalaya
        <input type="checkbox" name="eligibility">Nagaland <br> <br>

       
        Write about your intrest :<br><textarea rows="8" cols="20" </textarea> <br><br>   

        <input type="submit" name="submit">
        <input type="reset" name="reset">
    </fieldset>
	</form>
</body>
</html>
