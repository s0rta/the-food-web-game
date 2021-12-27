import React from "react"
import { IntlProvider, FormattedMessage } from 'react-intl';

const pageInSpanish = {
  h1: "spanish h1",
  h21: "first spanish h2",
  p1: "first spanish paragraph",
  p2: "second spanish paragraph",
  p3: "third spanish paragraph",
  h22: "second spanish h2",
  p4: "forth spanish paragraph",
  ol: "<li><b>spanish list title</b>spanish list text</li>",
  h22: "second spanish h2",
  p5: "fifth spanish paragraph",
  h23: "third spanish h2",
  p6: "sixth spanish paragraph"
}

const locale = "en"

function Educators() {
  return (
    <IntlProvider messages={locale === "es" ? pageInSpanish : ""} defaultLocale="en">
      <div className="educators-wrap copy-wrap">
        <div className="container">
          <h1><FormattedMessage id="h1" defaultMessage="For Educators" /></h1>
          <h2><FormattedMessage id="h21" defaultMessage="Lesson Plans" /></h2>
          <p><FormattedMessage id="p1" defaultMessage="We developed a few versions of these lesson plans that vary in length and topic. These are just suggestions, feel free to use any of the materials in your own way as well!" /></p>
          <p><FormattedMessage id="p2" defaultMessage="The full lesson plan is approximately 180 minutes long (longer if you do not assign the pre-assessment as homework). The lesson can be taught all at once, or broken into shorter sections (e.g., 2-90 minutes sessions or 3x60 minute sessions). The full lesson covers the following topics: food webs (and ecological networks), community structure, indirect interactions in food webs, threats to food webs (with a focus on coastal ecosystems), ecosystem services, and concept mapping. We recommend you read our paper in CourseSource for a complete description, including materials for this lesson plan." /></p>
          <p><FormattedMessage id="p3" defaultMessage="We modified the lesson plan to cover fewer topics and in a shorter amount of time (estimated 75 minutes). The following topics are included in this modified version: food webs (and ecological networks), community structure, indirect interactions in food webs, threats to food webs and ecosystem services. Access a complete description of this lesson plan, including materials in this Google Drive Folder." /></p>
          <h2><FormattedMessage id="h21" defaultMessage="Activity Summary" /></h2>
          <p><FormattedMessage id="p4" defaultMessage="The lesson plans above include 5 activities. We summarise the activities below (as well as in the lesson plans above), in the order we recommend." />
          </p>
          <ol><FormattedMessage id="ol" defaultMessage="
          <li><b>Food webs and ecosystem services - introduction and reflection:</b>This is a brief, 2-question activity that works well at the beginning of the lesson. It provides a short introduction/review of food webs and ecosystem services. The purpose of this activity is to capture students’ interest, promote curiosity and uncover prior knowledge. We recommend that you follow this activity with a think-pair-share in class.</li>
          <li><b>Community structure worksheet:</b> In this activity, students are encouraged to work in small groups of 3-4 to compare and contrast two food webs (e.g., how many species are present and what types?). They are also asked to hypothesize why the two food webs are different. The purpose of this activity is to practice existing skills using new knowledge and generate new ideas.</li>
          <li><b>Threats to coastal ecosystems jigsaw:</b> This jigsaw activity works well in groups of 2-3 (can be larger depending on time). The focus of this jigsaw is threats to coastal ecosystems; students select a threat and ecosystem from a list. They then conduct a brief online investigation to answer 4 questions. Once the worksheet is complete, students share their new knowledge with their group members. The purpose of this activity is for students to guide their own learning in a topic of interest, apply and extend existing knowledge, and to demonstrate their understanding to their peers.</li>
          <li><b>Food web game and reflections:</b> In this activity, students will play an online game on their own before answering 3 reflection questions. Students can reflect on their own or in group settings before reporting back to the class. There are two versions of the food web game: (1) Easier: Rocky Intertidal Zone, and (2) More Challenging: Salt Marsh. The purpose of this activity is for students to extend and apply their understanding and skills in a new way, and demonstrate understanding of new materials.</li>
          <li><b>Concept mapping in Miro:</b> For this activity, students will work independently or in small groups (3-5 people) to create a concept map/visualize an ecological system that includes species and their interactions (i.e., a food web), abiotic factors that influence species, and ecosystem services that the species provide. They will use Miro, an online collaborative concept mapping tool (free, functions like Google Docs). This activity can be modified if there is no access to computers: instead of using Miro, have students write on post-it notes and draw lines between them on a dry erase board or large piece of paper. The purpose of this activity is for students to apply their understanding and practice systems thinking skills; transferring knowledge from previous activities and course content.</li>
        " values={{
              li: (...msg) => <li>{msg}</li>,
              b: (...msg) => <b>{msg}</b>
            }} /></ol>
          <h2><FormattedMessage id="h22" defaultMessage="Slides" /></h2>
          <p><FormattedMessage id="p5" defaultMessage="You can find Google Slide versions of the powerpoints used for each lesson in this Google Folder. Feel free to download these slides or make a copy to edit so that they suit your needs. There are two slide decks: one for each lesson length." /></p>
          <h2><FormattedMessage id="h23" defaultMessage="Assessment" /></h2>
          <p><FormattedMessage id="p6" defaultMessage="We developed a pre- and post-assessment to assess student learning outcomes for both lesson lengths. We recommend grading students based on their improvement if you decide to use both the pre- and post-assessment. You can also grade based on “correctness” if using only the post-assessment. You can modify either assessment to better suit your needs/grading style. For answer keys, please email Aislyn at aislyn.keyes(at)colorado.edu" /></p>

        </div>
      </div>
    </IntlProvider>
  )
}

export default Educators;
