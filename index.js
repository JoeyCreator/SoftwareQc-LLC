/**
 * @license
 * Copyright 2020 SoftwareQc LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @author Joey Cadieux <joey@tech-center.com>
 */

function ask (question, yes, no) {
  if (confirm(question)) yes()
  
  else no()
}

function showOk() {
  alert( "you agreed." );
}

function showcancel() {
  alert( "you canceled the excution", showOk, showCancel);

  ask("do you agree?", showOk, showCancel);



  // User function
  function User(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

  }

  let admin = new User("admin, 22");

  alert( admin.age ); // 22

  // Admin Area

let group = {
  title: "Our Company",
  students: ["John", "Jane", "Alice"],

  showList() {
    this.student.foreach(
      student => alert(this.title + ': ' + student)