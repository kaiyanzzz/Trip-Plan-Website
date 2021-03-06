# Sprint 2 - *t04* - *Geek Velocity*

## Goal
### *Find places to go.*

## Sprint Leader: 
### *Jacquelyn Hyatt*

## Definition of Done

* The Increment release for `v2.x` created as a GitHub Release and deployed on black-bottle under SPRINT.
* The design document (`design.md`) is updated.
* The sprint document (`sprint.md`) is updated with scrums, completed metrics, review, and retrospective.

## Policies

### Mobile First Design
* Design for mobile, tablet, laptop, desktop in that order.
* Use ReactStrap for a consistent user experience (no HTML, CSS, style, etc.).

### Clean Code
* Code Climate maintainability of A.
* Minimize code smells and duplication.

### Test Driven Development
* Write the tests before the code.
* Unit tests are fully automated.

### Processes
* Main is never broken. 
* All pull request builds and tests for Main are successful.
* All dependencies managed using Maven, npm, and WebPack.
* GitHub etiquette is followed always.


## Planned Epics

This sprint will have our team focus on the goal of finding places to go. Our team will work towards this goal by taking on two epics, one for finding places to add to the user's trip and the other for highlighting the user's currently selected place. By completing these epics, our team will have fulfilled the goal and updated the functionality of our site.

Our team plans to first complete the epic "Find Places" listed under the product backog. This will entail adding the ability for a user to find places utilizing a string and then add those places to their trip. Adding this ability will involve utilizing the protocol find feature. In addition to this protocol, the team will work hard to ensure that the client can send proper find requests and the server can support such requests. The above tasks mean that the team will need to use progressive disclosure in order to create a pleasing flow of information for the user. Tasks for this epic will be split evenly among the team and all code, including commits, pull requests, and seperate issues, will be compiled together before the end of Sprint 2 in order to ensure proper completion of this epic. 

In addition to completing the above epic, our team also plans to complete the epic "Highlight Place". This epic will entail us working on a way to add functionality that allows a marker to appear when the user selects a place on their trip. Adding this functionality will help with the usability of our site by providing a visual cue when a place is selected by the user. As stated previously, the team will split this epic into tasks that can be spread evenly among the team in order for us to be successful in completing this epic.

## Metrics

| Statistic | # Planned | # Completed |
| --- | ---: | ---: |
| Epics | *2* | *0* |
| Tasks |  *15*   | *62* | 
| Story Points |  *26*  | *59* | 

Based on our team's previous performance, taking on the task of two epics and six tasks will be manageable. In the previous sprint our team was able to complete both epics assigned on the product backlog. Our team was not able to complete all tasks previously due to some impediments, but the team is more than capable of taking on the current tasks at hand.

## Scrums

| Date | Tasks closed  | Tasks in progress | Impediments |
| :--- | :--- | :--- | :--- |
| *9/13* | *N/A* | *#66* | Internet problems | 
| *9/14* | *N/A* | *#66* | N/A |
| *9/20* | *N/A* | *#66, #114, #116, #117* | Lack of knowledge |
| *9/21* | *#116, #120, #126, #127, #129, #132, #133* | *#114, #136, #138, #140, #141* | N/A |
| *9/22* |  *#138, #144, #151, #153, #156, #157, #158, #161* | *#71, #136, #139, #140*| N/A| 
| *9/24* | *#117, #114, #136, #167, #174, #176* | *#140, #139* | Lack of TA hours |
| *9/27* | *#115, #140, #173, #180, #182, #183* | *#139, #184, #187* | N/A |
| *9/29* | *#177, #188, #193, #195, #199, #219* | *#191, #71, #163* | Knowledge, computer troubles |


## Review

### Epics completed  

### Epics not completed 

Although our team was able to successfully send requests and recieve responses through the server to the
database, we were unable to finish the Find Places # 66 epic in its entirity. The epic entailed more planning and knowledge than previously perceived. 
Granted, our team came very close to finishing the epic. We are still in the process of making the places in the list addable to the trip. 

The team was also unable to complete the Highlight Places epic as we had planned. The team stayed focused on the Find Places epic throughout the sprint and found the epic to be more challenging than initially expected. This led to a lack of time and focus that could be dedicated to approaching the Highlight Places epic.

### Things we did well (regarding the product)

In terms of the product, our team executed our individually assigned tasks thouroughly and to the best of our ability.
Our backend implementation was handled well, and was the necessary boost that the client developers needed to get going 
on the #163 Make each place addable task. Our team did a good job of contributing incremental work throughout the sprint as 
well as meeting the designated amount of story points. 

## Retrospective

### Things that went well

During this sprint, team members became more aquainted with one another and were more willing to reach out for help when needed. As a team, we did better than last sprint when it came to communicating with each other. Team members, such as Abby, did a great job at reaching out to TA's for guidance when stuck on a problem. Similar to the previous sprint, Kaiyan made sure team members were on task and checked in with team mebers often. Nick worked hard to make up for the team's lack of server knowledge and did a great job getting our database set up and running. Mallory did a great job keeping our design.md file updated as we changed our UI during this sprint. 

### Things we need to improve

As a team, we need to work a little more on communication and planning. We really struggled with planning at the beginning of this sprint and that definitely hurt our team's progress. Taking the time to review the upcoming sprint in Zybooks would prove helpful for the planning phase. Another area that we could improve on is starting tasks ealier in order to get help earlier from each other and TAs. Included in this would be to make sure we have questions prepped for TAs in order to get proper help in a timely manner. 

We could also improve on individually preparing ourselves on the material for the upcoming sprint. This could 
help us stay efficient in our daily scrum meetings and provide us the opportunity to distribute the knowledge we acquired
on our own to share with our teamamtes. This is a win-win for everybody moving forward as a team.  

### One thing we will change next time

One thing the team could change next time is to start working on more code together as opposed to coding seperately and then adding it to the team repo. As a team we could come together more in order to ensure that all team members understand how the code works in order to keep building off our base code. This could be through simple updates on slack or discussions in person. 
