import TestbedCard from "../components/TestbedCard";

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

  return (
    <div className="flex flex-1 h-full w-full"> 
      <div className="p-10 flex flex-row justify-start items-start gap-10">
        {sample_links.map((sample, index) => {
          return <TestbedCard key={index} preview={sample.preview} title={sample.title} description={sample.description} action={sample.action}/>
        })}
      </div>
    </div>
  )
}

export default Home