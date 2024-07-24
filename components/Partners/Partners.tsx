import CardTemplate2 from '../ui/Card/CardTemplate2'
import SectionTitle from '../ui/SectionTitle'

type Partner = {
  image: string
  text: string
}

type PartnersProps = {
  partners: Partner[]
}

export default function Partners({ partners }: PartnersProps) {
  return (
    <div className="bg-primary text-white py-10">
      <SectionTitle
        title="Partners"
        text="With lots of unique blocks, you can easily build a page easily without any coding."
        color="secondary"
      />
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partnerItem, index) => (
          <CardTemplate2
            key={index}
            image={partnerItem.image}
            text={partnerItem.text}
          />
        ))}
      </div>
    </div>
  )
}
