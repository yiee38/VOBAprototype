import LogOutModal from "../components/LogOutModal";
import LogOutButton from "../components/LogOutModal";
import NavigationCard from "../components/NavigationCard";
import TestBed from "../components/CreateTestbedCard";

function Home () {
  var sample_links = [
    {
      preview: 'TESTBEDS',
      title: 'Create and Resume',
      description: 'Create new testbeds and access previously created testbeds.',
      action: 'Go To Testbeds',
      link: '/testbeds'
    },
    {
      preview: 'VBSNs',
      title: 'Create, Resume, Explore',
      description: 'Create new VBSNs, access previously developed VBSNs, or explore our provided sample VBSNs.',
      action: 'Go To VBSNs',
      link: '/vbsns'
    },
    {
      preview: 'DATABASE',
      title: 'Access and Upload',
      description: 'Access reports within the database and upload yours.',
      action: 'Go To Database',
      link: '/database'
    }
  ]

  var sample_test = [
    {
      title: 'Audio Tests',
      description: 'A list of available tests to check the audio services of your VBSN',
      task_list: [
        'Audio Enhancement',
        'Audio Masking',
        'Audio File Clearance'
      ]
    },
    {
      title: 'Translation Tests',
      description: 'A list of available tests to check the translation services for your VBSN',
      task_list: [
        'Text2Voice',
        'Voice2Text',
        'Voice2Voice'
      ]
    },
    {
      title: 'Security Tests',
      description: 'A list of available tests to check the security of your VBSN',
      task_list: [
        'User Authentication',
        'Firewall',
        'Blockchain Encryption'
      ]
    }
  ]


  return (
    <div className="flex flex-1 h-full w-full justify-center pt-32"> 
      <div className="flex flex-row justify-start items-start gap-10">
        {sample_links.map((sample, index) => {
          return <NavigationCard key={index} preview={sample.preview} title={sample.title} description={sample.description} action={sample.action} href={sample.link}/>
        })}
      </div>
    </div>
  )
}

export default Home