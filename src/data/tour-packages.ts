import { TourPackage, TourPackageCategory } from "@/types/tour";

export const tourCategories: TourPackageCategory[] = [
  {
    id: "1",
    title: "Amritsar Packages",
    slug: "amritsar-packages",
    description:
      "Explore the spiritual and cultural heritage of Amritsar with our curated packages",
    imageUrl: "/images/golden-temple.jpg",
    numberOfPackages: 6,
  },
  {
    id: "2",
    title: "Punjab Gurudwara",
    slug: "punjab-gurudwara",
    description:
      "Visit the sacred Gurudwaras across Punjab with our specialized tour packages",
    imageUrl: "/images/punjab-gurudwara.jpg",
    numberOfPackages: 3,
  },
  {
    id: "3",
    title: "Devi Darshan Yatra",
    slug: "devi-darshan",
    description: "Embark on a spiritual journey to various Devi temples",
    imageUrl: "/images/9-devi-darshan.jpg",
    numberOfPackages: 4,
  },
  // {
  //   id: "4",
  //   title: "Himachal Tour Packages",
  //   slug: "himachal",
  //   description:
  //     "Discover the beauty of Himachal Pradesh with our comprehensive tour packages",
  //   imageUrl: "/images/himachal-img.jpg",
  //   numberOfPackages: 14,
  // },
  // {
  //   id: "5",
  //   title: "Jammu & Kashmir Tours",
  //   slug: "kashmir",
  //   description:
  //     "Experience the paradise on earth with our Kashmir tour packages",
  //   imageUrl: "/images/kashmir-tours.jpg",
  //   numberOfPackages: 5,
  // },
];

export const tourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Ludhiana with Amritsar 3 Days Tour",
    slug: "ludhiana-with-amritsar-3-days-tour",
    description:
      "Experience the divine atmosphere of Golden Temple and explore the historic city of Amritsar",
    imageUrl: "/images/golden-temple-1.jpg",
    duration: "3 Nights / 4 Days.",
    price: 4999,
    packageType: "amritsar-packages",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana to Amritsar",
        description:
          "Arrive Ludhiana Railway Station, drive to Amritsar reached Amritsar, transfer to hotel for check-in. After some refreshment, Drive to Wagah Border India Pakistan Border which is famous for its Retreat ceremony at the time of sunset. Indeed the flag-lowering ceremony at the end of each day on the India Pakistan border at Wagah in Punjab has over the years become a tourist destination. Return to the hotel, overnight stay at Ludhiana hotel.",
      },
      {
        day: 2,
        title: "Amritsar - Sightseeing",
        description:
          "Agter Breakfast visit the blessings of Sri Harmandir Sahib the Golden Temple in Amritsar is the holiest shrine of the Sikh religion. Then Visit Jallianwala Bagh The Jallianwala Bagh is a public garden that houses a memorial to commemorate the massacre of peaceful celebrators by the British forces. Then take a walk to local Markets/Bazaar Surrounding Golden Temple, Later, your trip will extend to the Durgiana Hindu temple. Visit Maharaja Ranjit Singh Panorama (museum) and Mata Lal Devi temple which is replica of Vaishno Devi. \n\n Overnight stay at hotel.",
      },
      {
        day: 3,
        title: "Back to Home",
        description:
          "After Breaklfast On the last day of the tour check out from the hotel and get an assisted transfer to railway station /airport your onward destination.",
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "2",
    title: "Amritsar to Gurudwaras Tour from Ludhiana",
    slug: "amritsar-to-gurudwara-tour-from-ludhiana",
    description:
      "Amritsar - Tarn Taran Sahib - Khadoor Sahib - Goindwal Sahib -",
    imageUrl: "/images/goindwal-sahib.jpg",
    duration: "2 Nights / 3 Days.",
    price: 0,
    packageType: "amritsar-packages",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana to Amritsar",
        description:
          "Arrive Ludhiana Railway Station, drive to Amritsar reached Amritsar, transfer to hotel for check-in. After breakfast Sightseeing of Amritsar visiting Golden Temple the holiest shrines for the Sikhs which is a blend of Hindu and Muslims architecture following, and then visit Jallianwala Bagh, The Jallianwala Bagh is a public garden which houses a memorial to commemorate the massacre of peaceful celebrators by the British forces. Evening explores the market of Ludhiana which is famous for its traditional handicraft and handloom products including phulkari, lacquered woodwork, jewelry, etc. Overnight stay in hotel.",
      },
      {
        day: 2,
        title: "Local Gurudwara Tour",
        description:
          "After breakfast proceeds for full day, Gurdwara Yatra around Ludhiana starting from Gurdwara Shri Tarn Taran Sahib (25 Kms from Ludhiana) established by the fifth guru, Guru Arjan Dev. It is situated in the city of Tarn Taran Sahib, It has the distinction of having the largest Sarovar (Water pond) of all the gurudwaras. Then Visit Khadoor Sahib (15 Kms from Tarn Taran)- Sri Khadur Sahib was the family home of the second Guru, Sri Guru Angad Dev Ji. Then proceed to Goindwal Sahib (10 Kms from Khadur Sahib) to visit Gurdwara Shri Baoli Sahib- This was the first center of Sikhism and was established by Sri Guru Amar Das Ji. Evening back to the hotel. Overnight stay.",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "After breakfast free till check – out time of hotel & transfer to Airport / Railway station for onward journey.",
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "3",
    title: "Full Day Tour Amritsar",
    slug: "full-day-tour-amritsar",
    description: `Pick up from Ludhiana, Drive to Amritsar reached Amritsar Transfer to Hotel for Check-in. Some refreshments city tour with the beautiful Golden Temple while explaining its history and providing interesting facts. Then visit Jallianwala Bagh - the place that reminds every Indian of the brutal and hairless massacre by British general Dyer.

Visit Durgiana Temple, Durgiana Temple Also known as Laxmi Narayan Temple, the Durgiana Temple is one of the most important Hindu Temples located in the Ludhiana district of Punjab. Then Visit Maharaja Ranjit Singh Panorama, The Ram Bagh Palace was converted into a museum in 1977 and has an interesting collection of archival records from the court of Maharaja Ranjit Singh, including the attire worn by Sikh warriors, paintings, miniatures, coins, and weapons.

After lunch visit Wagah border The guard changing ceremony every evening in the India- Pakistan border is the highlight of the area.

Then, you will attend the putting of the holy book to bed ceremony(night ceremony/palki sahib).

Meeting place Golden Temple Time 7 p.m. to 10 p.m.`,
    imageUrl: "/images/amritsar-tours3.jpg",
    duration: "Whole Day",
    price: 0,
    packageType: "amritsar-packages",
    highlights: [],
    itinerary: [],
    inclusions: [],
    exclusions: [],
    carDetails: [
      {
        carName: "Sedan Car",
        price: 1500,
      },
      {
        carName: "SUV",
        price: 1800,
      },
    ],
  },
  {
    id: "4",
    title: "Amritsar Local Gurudwaras",
    slug: "amritsar-local-gurudwaras",
    description: `You can choose Gurudwaras mentioned below to visit in 1 or 2 day tour by car.`,
    imageUrl: "/images/golden-temple-1.jpg",
    duration: "1 Nights / 2 Days.",
    price: 0,
    packageType: "punjab-gurudwara",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Amritsar Gurudwarra",
        description: `Pickup from Ludhiana Hotel, Drive to Amritsar, after reaching Amritsar, Transfer to hotel for check-in. Some Refreshments visitAmritsar Golden Temple:- Golden temple is one of the most important pilgrimage destinations in India. Considered as the ultimate place of the Sikh faith, the Golden Temple of Amritsar attracts a large number of devotees every year. The Golden temple is also known as Harmandir Sahib, which means "the Temple of God".

          Gurudwara Ramsar Sahib:-Gurudwara Ramsar stands on the bank of the Ramsar sarovar, near Chativind Gate, on the southeastern side of the walled city. After the completion of the Harimandar, Guru Arjan undertook the compilation of Adi Granth, the Holy Book, now revered as Guru Granth Sahib.

          Gurdwara Baba Deep Singh Shaheed:-The great Sikh scholar and martyr Baba Deep Singh was mortally wounded here when in 1762 the Afghan invader Ahmed Shah Abdali ordered the Harimandar Sahib blown up and the Sacred Tank filled in. Baba Deep Singh, the greatest Sikh scholar of his time, took up the sword on a mission to restore the sanctity of the Sikhs most revered Temple.`,
      },
      {
        day: 2,
        title: "Gurudwaras Darshan",
        description: `Gurudwara Chheharta Sahib:- 7 <!>km west of Ludhiana is named after a well that Guru Arjan (1563-1606) had sunk. The well was so wide, and the water supply so abundant, that six Persian wheels installed around the interior of its circufrence could operate simultaneously. Hence its name Chheharta lit. Having six (chhe) Persian wheels (hart or harta).
          
          Gurdwara San Sahib:- Is situated in the village of Basarke in Ludhiana District, Punjab, India. Guru Amar Das ji was named next Guru by Guru Angad Dev ji, but Datu ji the son of Guru Angad Dev was, like Guru Nanak's son, sure that as the Guru's son he should be appointed the Guru. He forced Guru Amar Das ji to leave Goindwal Sahib.

          Gurudwara Bir Baba Buddha:- Gurudwara Bir Baba Buddha Sahib in the revenue limits of the village of Thatta, 20 km south of Ludhiana, commemorates Baba Buddha (1506 - 1631), the venerable Sikh of the time of the time of Guru Nanak who lived long enough to anoint five succeeding Gurus. He spent many years looking after the bir, lit.

          Gurudwara Taran Tarn Sahib:- is a Gurdwara established by the fifth guru, Guru Arjan Dev. It is situated in the city of Tarn Taran Sahib. It has the distinction of having the largest sarovar (Water pond) of all the gurudwaras. Also it is famous for the month gathering of pilgrims on day of Amavas (No moon night).

          Gurudwara Goindwal Sahib:- the first ever place of Sikh pilgrimage so designated by its founder, Guru Amar Das. This in fact was the spot where the ancient east west highway crossed the River Beas. With the renovation of the highway by Sher Shah Suri, the Afghan ruler of north India (1540-45), this ferry site became an important transit point.

          Gurudwara Khadur Sahib:- Khadur Sahib is situated close to Goindwal and is only 19 kilometers from TaranTaran. The place is historically important as eight Gurus of Sikhs (link with ten gurus) visited it. It was the family hone of Guru Angad Dev Ji. On the advice of Guru Nanak Dev Ji, Guru Angad Dev Ji spent his life at Khadur and made it a religious centre.

          Gurudwara Baba Bakala:- Before death at Delhi on March 30, 1664 Guru Harkrishan uttered these words 'Baba Bakala', thereby meaning that his successor was to be found at Bakala village in Ludhiana. In Bakala there were many men who then claimed to be the Guru's successor.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "5",
    title: "Gurudwaras in Punjab Darshan Yatra",
    slug: "gurudwaras-in-punjab-darshan-yatra",
    description: `Amritsar - Kartarpur + Bhatinda - Patiala - Fatehgarh Sahib - Dukh Niwaran sahib`,
    imageUrl: "/images/gurudwara-chhearta-sahib-ji3.jpg",
    duration: "5 Nights / 6 Days.",
    price: 0,
    packageType: "punjab-gurudwara",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana to Amritsar",
        description: `After Breakfast, Morning Drive, for Dera Baba Nanak and Darshans of Sri Darbar Sahib and Sri Chola Sahib Gurudwaras. Also view Gurudwara at Kartarpur, which is across the border in Pakistan, from Indian Border, overnight at hotel at Ludhiana.`,
      },
      {
        day: 2,
        title: "Amritsar - Kartarpur",
        description: `After Breakfast, Morning Drive, for Dera Baba Nanak and Darshans of Sri Darbar Sahib and Sri Chola Sahib Gurudwaras. Also view Gurudwara at Kartarpur, which is across the border in Pakistan, from Indian Border, overnight at hotel at Ludhiana.`,
      },
      {
        day: 3,
        title: "Kartarpur - Bhatinda",
        description: `Morning drive for Bhatinda, enroute Darshans of Tarn Taran Sahib, Goindwal Sahib, Khadur Sahib and Muktsar Sahib Gurudwaras, overnight at Bhatinda hotel.`,
      },
      {
        day: 4,
        title: "Bhatinda - Patiala",
        description: `Morning Darshans of Takht Sri Damdama Sahib, evening drive for Patiala, overnight at Patiala hotel.`,
      },
      {
        day: 5,
        title: "Fatehgarh Sahib",
        description: `Early morning drive for Fatehgarh Sahib, Darshan of Gurudwara Fatehgarh Sahib and Gurudwara Jyoti Sarup, overnight at hotel at Patiala.`,
      },
      {
        day: 6,
        title: "Dukh Niwaran Sahib",
        description: `Morning Darshan of Gurudwara Dukh Niwaran Sahib. Visit Patiala Bazar for some Punjabi shopping and afternoon drop at Rajpura/Ludhiana Railway station yout onward journey.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "6",
    title: "Ludhiana - Vaishno Devi Darshan",
    slug: "ludhiana-vaishno-devi-darshan",
    description: `Ludhiana - Katra`,
    imageUrl: "/images/vaishno-devi2.jpg",
    duration: "3 Nights / 4 Days.",
    price: 0,
    packageType: "devi-darshan",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana - Katra",
        description: `Arrive Ludhiana railway station. Upon arrival you will be met by our representative and drive to Katra. upon arrival in Katra you will be transferred to the hotel. Katra is the starting point for the Vaishno Devi pilgrimage. Overnight in hotel.`,
      },
      {
        day: 2,
        title: "Katra | Vaishnodevi",
        description: `Early in the morning we proceed further to visit the Holy temple of Vaishno Devi. This temple is situated on the top of the hill. To visit this temple one has to hire pony or travel by foot.`,
      },
      {
        day: 3,
        title: "Vaishno Devi Darshan - Katra",
        description: `From Katra the Vaishno Devi pilgrimage is about 12 kms. After visiting the temple we return back to Katra the same day. Overnight in hotel.`,
      },
      {
        day: 4,
        title: "Departure",
        description: `After breakfast transfer to Airport / Railway station your onward journey.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "7",
    title: "4 Char Devi Darshan with Ludhiana",
    slug: "4-char-devi-darshan-with-ludhiana",
    description: `chandigarh-Vaishnodevi-Chamunda devi-Kangraji-Jawalaji`,
    imageUrl: "/images/4-devi-darshan.jpg",
    duration: "3 Nights / 4 Days.",
    price: 0,
    packageType: "devi-darshan",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana - Katra",
        description: `Arrive Ludhiana railway station. Upon arrival you will be met by our representative and Drive to Katra "VaishnoDevi" as it is popularly known is a small town in district of the Indian state of Jammu and Kashmir situated in the foothills of the Trikuta Mountains, where the holy shrine of Vaishno Devi is located. On arrival at Katra, check into the hotel & relax. Evening is free at leisure. Overnight at Katra Hotel.`,
      },
      {
        day: 2,
        title: "Katra",
        description: `After Breakfast, Start your Holy Journey to Mata VaisnodeviDarshan. Mata VaishnoDevi temple is one of the holiest Hindu temples dedicated to Shakti and is the second most visited religious shrine in India after Tirupati Balaji Temple. Trek to Mata VaishnoDevi shrine (14 km), ponies can also be arranged by self (at your own cost) for the trek, return back to Katra late in evening/night. Overnight at Katra Hotel.`,
      },
      {
        day: 3,
        title: "Chamunda Devi - KangraJi - JawalaJi",
        description: `After breakfast visit CHAMUNDA DEVI , also known as Chamundi and Charchika,is a fearsome aspect of Devi, the Divine Mother and one of the seven Matrikas (mother goddesses). Then visit BRAJESHWAR temples in KANGRA This temple is dedicated to Sui Mata, the local princess of Chamba who sacrifice her life for the people of her kingdom.Colourful paintings on the temple wall depicts the story of SuiMata. After Darshans proceed to JAWALAMUKHI (55kms). Check in hotel and after lunch visit JAWALAJI temple also called the "Flaming Goddess" or "She of the flaming mouth".It lies in the valley of Beas and is built over some natural jets of combustible gas believed to be a manifestation of the goddess Devi Bhagwati Jawalamukhi. Overnight in hotel at JAWALAMUKHI.`,
      },
      {
        day: 4,
        title: "Departure",
        description: `After Breakfast drop at airport/Station for onward journey.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "8",
    title: "9 Devi Darshan",
    slug: "9-devi-darshan",
    description: ``,
    imageUrl: "/images/9-devi-darshan.jpg",
    duration: "7 Nights / 8 Days.",
    price: 0,
    packageType: "devi-darshan",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Ludhiana - Chandigarh",
        description: `Arrive Ludhiana Railway Station, Drive to Chandigarh leave for Chandigarh. On your way to Chandigarh, visit Mata Mansa Devi Temple. Dedicated to Maa Mansa, the shrine is highly revered by the devotees. People from far and near, visit the temple to seek the blessings of Maa Mansa.Leave for Chandigarh after Darshan. On reaching Chandigarh, check-in at the hotel. Go for sightseeing at the attractions of Chandigarh. Visit the famous Sukhana Lake, Rock Garden and Tower of Shadows. Enjoy a comfortable stay at the hotel.`,
      },
      {
        day: 2,
        title: "Chandigarh - Nainadevi - Chintpurni/Sheetladevi – Kangra",
        description: `Drive towards Naina Devi Temple (Bilaspur) this morning. To reach the temple at the hill top, you can use the stairs or travel through a cable car. One of the 51 Shaktipeethas, Naina Devi Temple is a popular pilgrimage site in Himachal Pradesh. It is the place where the eyes of Sati fell down.

          After Darshan, leave for Sheetla Devi Temple which is dedicated to Mata Sheetla Devi. Also visit Chintpurni Temple, a sacred temple that holds immense religious importance. It is believed that those who wish for something from a true heart, their wishes are fulfilled.

          Stay overnight at the hotel.`,
      },
      {
        day: 3,
        title: "Kangra - Jwala ji - Bhagula Mukhi / Kangra Devi / Mata Kapal Pathri / Mata Kangraji /Mata Jawala ji",
        description: `This morning, leave for Dharamshala. On arrival, complete all the check-in formalities at the hotel. Seek blessings at Mata Jwala ji Temple, a revered temple dedicated to Goddess Jwalamukhi. The temple has nine permanent flames that have been named after goddesses- Mahakali, Unpurna, Chandi, Hinglaj, Bindhya Basni, Maha Lakshmi, Saraswati, Ambika and Anji Devi. Post Darshan, visit Maa Bhagula Mukhi Temple and take the blessings of Maa Bhagula who is known to be the source of every knowledge of the universe. Visit Kangra Devi Temple where Maa Kangra is worshipped in the form of a pindi. You are free to spend the rest of the day at leisure. Overnight stay at Kangra.`,
      },
      {
        day: 4,
        title: "Kangra – Chamunda Devi - Dharamshala – Dalai Lama Monastery",
        description: `Go for Darshan at Chamunda Devi Mandir in the morning. One of the seven mother goddesses, Chamunda Devi is also known as Chamundi. Devotees from all over visit the temple to seek the blessings of Maa Chamunda. Go for sightseeing around Dharamshala in the afternoon. Visit attractions like Dalai Lama Monastery and Bhagsu Nag temple. Get back to the hotel by evening and stay overnight at the hotel.`,
      },
      {
        day: 5,
        title: "Dharamshala / Katra",
        description: `Leave for Katra via Jammu this morning. On arriving in Katra, check-in at the hotel. Spend the day the way you like. You can go to explore the local market of Katra. Overnight stay at Katra.`,
      },
      {
        day: 6,
        title: "Katra Vaishno Devi",
        description: `This day, you go for Darshan at Vaishno Devi. Early in the morning, start trekking to the Vaishno Devi Shrine. One of the holiest shrines in India, Vaishno Devi Temple is the abode of Maa Vaishno Devi, who is also known as Mata Rani. Maa Vaishno is considered a manifestation of Mother Goddess. People from all over the world visit the temple to seek blessings of Maa Vaishno. People believe that no prayer goes unanswered from the temple of Maa Vaishno. Trek back to Katra after Darshan at the temple. On reaching, get back to the hotel and stay overnight.`,
      },
      {
        day: 7,
        title: "Departure",
        description: `After Breakfast Drop at the Airport or Railway station and carry on with your onward journey.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
  {
    id: "9",
    title: "Char Dham Yatra with Ludhiana Tour",
    slug: "char-dham-yatra-with-ludhiana-tour",
    description: `Ludhiana-Barkot-Uttarkashi-Gangotri-Kedarnath-Badrinath.`,
    imageUrl: "/images/char-dham-yaara.jpg",
    duration: "7 Nights / 8 Days.",
    price: 0,
    packageType: "devi-darshan",
    highlights: [],
    itinerary: [
      {
        day: 1,
        title: "Arrive Ludhiana - Haridwar",
        description: `Arrive Ludhiana Railway Station train for Haridwar. On arrival at Haridwar check-in at hotel. Evening Visit Mansa Devi temple & Aarti at Har Ki Peri. Overnight stay at hotel.`,
      },
      {
        day: 2,
        title: "Haridwar - Barkot",
        description: `Morning drive to Barkot via Dehradun, Mussoorie, and en-route visit Kempty fall. Later continue drive to Barkot. On arrival Barkot Check In at Hotel.

          Overnight stay at hotel.`,
      },
      {
        day: 3,
        title: "Barkot - Yamunotri - Barkot",
        description: `Morning leave for Uttarkashi, a drive of 82 kms. En-route visit Prakateshwar Cave, on arrival Uttarkashi check in at the hotel evening visit Vishwnath Temple.

          Overnight stay at the hotel.`,
      },
      {
        day: 4,
        title: "Barkot - uttarkashi",
        description: `Go for Darshan at Chamunda Devi Mandir in the morning. One of the seven mother goddesses, Chamunda Devi is also known as Chamundi. Devotees from all over visit the temple to seek the blessings of Maa Chamunda. Go for sightseeing around Dharamshala in the afternoon. Visit attractions like Dalai Lama Monastery and Bhagsu Nag temple. Get back to the hotel by evening and stay overnight at the hotel.`,
      },
      {
        day: 5,
        title: "Uttarkashi - Gangotri - Uttarkashi",
        description: `Early morning drive to Gangotri and on arrival take a holy dip in the sacred river Ganges, also called Bhagirathi at its origin. Perform Pooja after that and relax for some time in the lovely surroundings, afternoon drive to Uttarkashi, on arrival check into the Hotel.

          Overnight stay in hotel.`,
      },
      {
        day: 6,
        title: "Uttarkashi - Guptkashi",
        description: `Morning drive to Guptkashi, en-route visit Tehri Dam & continue journey toward Guptkashi. Upon arrival in check-in at hotel. Later in the evening visit Kashi Vishwnath Temple, Ardh Narishwar Temple.

          Overnight stay at the Hotel.`,
      },
      {
        day: 7,
        title: "Guptkashi - Kedarnath",
        description: `Morning drive to Gaurikund (32 kms drive-one way). On arrival Gaurikund start your journey on the tough Trek ahead. Stop for lunch en route at Rambara, and continue after that to arrive by late afternoon, on arrival check in to the Hotel / Guest Houses. After freshening up, perform Pooja and also Darshan at Shri Kedarnathji. In the evening also visit Adi Shankaracharya Samadhi behind the Temple.

          Overnight stay at the Hotel.`,
      },
      {
        day: 8,
        title: "Kedarnath - Pipalkoti",
        description: `Early Morning Pooja and darshan at the Temple, Morning trek down to Gaurikund, on arrival meet with driver and leave for Pipalkoti, on arrival Pipalkoti check in at hotel for overnight stay.`,
      },
      {
        day: 9,
        title: "Pipalkoti - Badrinath",
        description: `Morning leave for Shri Badrinath Ji. Enroute visit Narsingh Temple, and Adi Sankracharya Samadhi at Joshimath, than drive to Badrinath On arrival take the holy Darshan and spend time visiting Mana village the last village before the Tibetan border, Byas Gufa, Bheem Pul and Saraswati River.

          Overnight stay at hotel.`,
      },
      {
        day: 10,
        title: "Departure",
        description: `After Breakfast Drop at the Airport or Railway station and carry on with your onward journey.`,
      },
    ],
    inclusions: [],
    exclusions: [],
    carDetails: [],
  },
];

export const getTourPackagesByCategory = (categorySlug: string) => {
  return tourPackages.filter((pkg) => pkg.packageType === categorySlug);
};

export const getTourPackageBySlug = (slug: string) => {
  return tourPackages.find((pkg) => pkg.slug === slug);
};
