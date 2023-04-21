import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/TestBed"; 
function Home () {
  var sample_links = [
    {
      preview: 'TESTBEDS',
      title: 'Create and Resume',
      description: 'Create new testbeds and access previously created testbeds.',
      action: 'Go To Testbeds'
    },
    {
      preview: 'VBSNs',
      title: 'Create, Resume, Explore',
      description: 'Create new VBSNs, access previously developed VBSNs, or explore our provided sample VBSNs.',
      action: 'Go To VBSNs'
    },
    {
      preview: 'DATABASE',
      title: 'Access and Upload',
      description: 'Access reports within the database and upload yours.',
      action: 'Go To Database'
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
    <div className="flex flex-1 h-full w-full"> 
      <div className="p-10 flex flex-row justify-start items-start gap-10">
        {sample_links.map((sample, index) => {
          return <TestbedCard key={index} preview={sample.preview} title={sample.title} description={sample.description} action={sample.action}/>
        })}
      </div>

      <div className="p-10 flex flex-row justify-start items-start gap-10">
        {
        sample_test.map((sample) => {
          return <TestBed title={sample.title} description={sample.description} task_list={sample.task_list}/>
        })
        }
      </div>
    </div>
  )
}

export default Home