import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

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
  p6: "sixth spanish paragraph",
};

const locale = "en";

function Educators() {
  return (
    <IntlProvider
      messages={locale === "es" ? pageInSpanish : ""}
      defaultLocale="en"
    >
      <div className="educators-wrap copy-wrap">
        <div className="container">
          <h1>
            <FormattedMessage id="h1" defaultMessage="For Educators" />
          </h1>
          <h2>
            <FormattedMessage id="h21" defaultMessage="Lesson Plans" />
          </h2>
          <p>
            <FormattedMessage
              id="p3"
              defaultMessage="We modified the lesson plan to cover fewer topics and in a shorter amount of time (estimated 75 minutes). The following topics are included in this modified version: food webs (and ecological networks), community structure, indirect interactions in food webs, threats to food webs and ecosystem services. Access a complete description of this lesson plan, including materials in this Google Drive Folder."
              values={{
                a1: (...msg) => (
                  <a href="https://drive.google.com/drive/folders/13evU8EXkA13k98Ezm2M5tESJLfZX4fpr?usp=sharing">
                    {msg}
                  </a>
                ),
                a2: (...msg) => (
                  <a href="https://drive.google.com/drive/folders/1ief-sIgSOqtFx07fUvUD1_Gzz1zEArht?usp=sharing">
                    {msg}
                  </a>
                ),
                a3: (...msg) => (
                  <a href="https://drive.google.com/drive/folders/1W6qJCqR7IhQLM-o5fRW-hfLlgYTYFf7D?usp=sharing">
                    {msg}
                  </a>
                ),
              }}
            />
          </p>

          <p>
            <FormattedMessage
              id="p2"
              defaultMessage="The full lesson plan is approximately 150-180 minutes long. The lesson can be taught all at once, or broken into shorter sections (e.g., 2-90 minutes sessions or 3x60 minute sessions). The full lesson covers the following topics: food webs (and ecological networks), community structure, indirect interactions in food webs, threats to food webs (with a focus on coastal ecosystems), ecosystem services, and concept mapping. We recommend you read our open-access paper in CourseSource for a complete description, including all materials for this lesson plan."
            />
          </p>
          <h2>
            <FormattedMessage id="h21" defaultMessage="Activity Summary" />
          </h2>
          <p>
            <FormattedMessage
              id="p4"
              defaultMessage="The lesson plans above include 4 activities. We summarise the activities below (as well as in the lesson plans above), in the order we recommend."
            />
          </p>
          <ol>
            <FormattedMessage
              id="ol"
              defaultMessage="
          <li><b>Community structure worksheet:</b> In this activity, students are encouraged to work in small groups of 3-4 to compare and contrast two food webs (e.g., how many species are present and what types?). They are also asked to hypothesize why the two food webs are different. The purpose of this activity is to practice existing skills using new knowledge and to generate new ideas.</li>
          <li><b>Threats to coastal ecosystems jigsaw:</b> This jigsaw activity works well in groups of 2-3 (can be larger depending on time). The focus of this jigsaw is threats to coastal ecosystems. Students select a threat and ecosystem from a provided list. They then conduct a brief online investigation (using provided websites) to answer a series of questions. Once the worksheet is complete, students share their new knowledge with their group members. The purpose of this activity is for students to guide their own learning in a topic of interest, apply and extend existing knowledge, and to demonstrate their understanding to their peers.</li>
          <li><b>Food web game and reflections:</b> In this activity, students will play the online game on their own before answering reflection questions. Students can reflect on their own or in group settings before reporting back to the class. There are two versions of the food web game: (1) Easier: Rocky Intertidal Zone (best for middle school and high school students), and (2) More Challenging: Salt Marsh (best for high school and undergraduate students). The purpose of this activity is for students to extend and apply their understanding and skills in a new way, and demonstrate understanding of new materials.</li>
          <li><b>Concept mapping:</b> For this activity, students will work independently or in small groups (3-5 people) to create a concept map/visualize an ecological system that includes species and their interactions (i.e., a food web), abiotic factors that influence species, and ecosystem services that the species provide. They can use Jamboard, an online collaborative concept mapping tool (free, functions like Google Docs), or can sketch the concept map on paper, white boards, or using post-it notes. The purpose of this activity is for students to apply their understanding and practice systems thinking skills; transferring knowledge from previous activities and course content.</li>
        "
              values={{
                li: (...msg) => <li>{msg}</li>,
                b: (...msg) => <b>{msg}</b>,
              }}
            />
          </ol>
          <h2>
            <FormattedMessage id="h22" defaultMessage="Slides" />
          </h2>
          <p>
            <FormattedMessage
              id="p5"
              defaultMessage="You can also find the powerpoint slides used for each lesson in the Google Drive Folder. Feel free to download these slides and edit so that they suit your needs."
            />
          </p>
          <h2>
            <FormattedMessage id="h23" defaultMessage="Assessment" />
          </h2>
          <p>
            <FormattedMessage
              id="p6"
              defaultMessage="We developed a pre- and post-assessment to assess student learning outcomes that covers the topics for all of the activities (i.e., the longest lesson plan length). You can remove parts of the assessment if you choose to only cover a subset of the topics. We recommend grading students based on their improvement if you decide to use both the pre- and post-assessment. You can also grade based on “correctness” if using only the post-assessment. You can modify either assessment to better suit your needs/grading style."
            />
          </p>
        </div>
      </div>
    </IntlProvider>
  );
}

export default Educators;
