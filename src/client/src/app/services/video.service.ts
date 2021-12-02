import { Injectable } from '@angular/core';
import { Video } from '../../../../shared/models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  filteredVideos:any;

  filteredItems(search?:any): any {
    if (!search) {
      this.filteredVideos = this.shuffle(this.videoList);
    } else {
      this.filteredVideos = this.videoList.filter((video) =>
        video.name.toLowerCase().includes(search.toLowerCase()) || 
        video.type.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  shuffle(list:any) {
    let newList = list.slice(1);
    let shuffleList = newList.reduce((p:any, n:any) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);

    return [list[0]].concat(shuffleList);
  }

  videoList: Array<Video> = [
    
    {
      id: '1',
      type: 'kids',
      name: 'CoComelon Songs For Kids',
      author: 'Cocomelon - Nursery Rhymes ',
      url: 'https://www.youtube.com/watch?v=qXcMNBQnQMM',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTTO3WwkvLZ_PAT9No494lanolwzMXWHpcXRgZzpA=s88-c-k-c0x00ffffff-no-rj',
      authorurl: 'https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ',
      pictureurl:
        'https://i.ytimg.com/vi/KXX7QSz7X6I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKu4zAlYN8ozvZGwjPvMYz_eWtkg',
      views: '1.3M views',
    },
    {
      id: '2',
      type: 'Educational',
      name: 'How To Manage User Roles In Node.js',
      author: 'Web Dev Simplified',
      url: 'https://youtu.be/jI4K7L-LI58',
      authorurl: 'https://youtu.be/KXX7QSz7X6I',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/jI4K7L-LI58/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==\u0026rs=AOn4CLD5unz5FK4s4mmCOzUiypO4r2UYEQ',
      views: '5.2K views',
    },
    {
      id: '3',
      type: 'Educational',
      name: 'MEAN Stack (Angular 10) Tutorial',
      author: 'Djamware',
      url: 'https://www.youtube.com/watch?v=-ZSgcRvdvGc',
      authorurl: 'https://www.youtube.com/channel/UCtI81hYLh2Ae_45KHkyy0vw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTA6cEEFmHDXgrK4AVDOZc5xRxtEIcGGgyBCb4-=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/-ZSgcRvdvGc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE2uNYid50rcGMdqt9zXbn3waxjg',
      views: '2.4M views',
    },
    {
      id: '4',
      type: 'Educational',
      name: 'Angular Crash Course 2021',
      author: ' TRAVERSYMEDIA ',
      authorurl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
      url: 'https://www.youtube.com/watch?v=3dHNOWTI7H8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/3dHNOWTI7H8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEwivMXmvNYkVBMxiUNIOM-j3MLQ',
      views: '461,167 views',
    },
    {
      id: '5',
      type: 'Educational',
      name: "Find Video Thumbnail URL",
      author: 'CHRIS PALMER SEO',
      authorurl: 'https://www.youtube.com/channel/UC8P0dc0Zn2gf8L6tJi_k6xg',
      url: 'https://www.youtube.com/watch?v=vx5dSS3BBOk',
      avatarurl:
      'https://yt3.ggpht.com/JQVs7FuJw_UZvjPcol2DHHz35f2JEN3Zt5cdgGbidRzUqdT_uHGQjj5HE7iYnIsRJvrldZd9XQ=s48-c-k-c0x00ffffff-no-rj', 
      pictureurl:
      "https://i.ytimg.com/vi/vx5dSS3BBOk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs",
      // 'https://i.ytimg.com/vi/vx5dSS3BBOk/hqdefault.jpg?sqp ... ',
      views: '24,815  views',
    },
    {
      id: '6',
      type: 'Educational',
      name: 'Stripe Elements & Checkout with Angular',
      author: 'Fireship',
      authorurl: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA',
      url: 'https://www.youtube.com/watch?v=zTj0FZHunNE',
      avatarurl:
      'https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s48-c-k-c0x00ffffff-no-rj', 
      pictureurl:
      'https://i.ytimg.com/vi/zTj0FZHunNE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLB7NahpOEUEC-caKb1NJUCrJxXA1g', 
      views: '42,246 views',
    },
    {
      id: '7',
      type: 'Travel',
      name: 'Big Sur: 8 Things to do on a Road Trip',
      author: 'California Through My Lens',
      authorurl: 'https://www.youtube.com/channel/UCZFRs1R9ECKDwnLy5IQzwkg',
      url: 'https://www.youtube.com/watch?v=HLxWrKHWQ6Q',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLROzPj8o2FWGFzJntlDUppMDTiV4hK0-CIlNlj_DQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/HLxWrKHWQ6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaVHHGQ7hMgTT51UaELJu-Kc4kAg',
      views: '58k views',
    },
    {
      id: '8',
      type: 'Movies',
      name: 'Dhamaka | Official Trailer | Kartik Aaryan',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=qRESnWFYYho',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/qRESnWFYYho/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBonjvSR5LFRCw5AYVNZUQ88ro3ZA',
      views: '37M  views',
    },
      
    {
      id: '11',
      type: 'Educational',
      name: 'Angular ngrx Redux Quick Start Tutorial',
      author: 'Fireship',
      authorurl: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA',
      url: 'https://www.youtube.com/watch?v=f97ICOaekNU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/f97ICOaekNU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5q_d9ryoeABFCeqYyY73SDeMk4Q',
      views: '147K views',
    },
    {
      id: '12',
      type: 'kids',
      name: 'Wheels on the Bus',
      author: 'Cocomelon - Nursery Rhymes ',
      authorurl: 'https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ',
      url: 'https://www.youtube.com/watch?v=Zpxlhq3cp_M',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTTO3WwkvLZ_PAT9No494lanolwzMXWHpcXRgZzpA=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/Zpxlhq3cp_M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4',
      views: '74M views',
    },
    {
      id: '13',
      type: 'kids',
      name: 'Halloween Dress Up Song',
      author: 'Cocomelon - Nursery Rhymes',
      authorurl: 'https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ',
      url: 'https://www.youtube.com/watch?v=moKn3gL1OQ0',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTTO3WwkvLZ_PAT9No494lanolwzMXWHpcXRgZzpA=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/moKn3gL1OQ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026',
      views: '53M views',
    },
    {
      id: '14',
      type: 'kids',
      name: 'Yes Yes Playground Song ',
      author: 'Cocomelon - Nursery Rhymes',
      authorurl: 'https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ',
      url: 'https://www.youtube.com/watch?v=WM1J8YWi8jw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTTO3WwkvLZ_PAT9No494lanolwzMXWHpcXRgZzpA=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
      "https://i.ytimg.com/vi/WM1J8YWi8jw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDcH6a73cNyD9RaiwAAzqY2bMbvag",
            views: '25M views',
    },
    {
      id: '15',
      type: 'kids',
      name: 'Baby Shark Song - Hide and Seek ',
      author: 'Cocomelon - Nursery Rhymes',
      url: 'https://www.youtube.com/watch?v=SNox1U3D_Fk',
      authorurl: 'https://www.youtube.com/channel/UCbCmjCuTUZos6Inko4u57UQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTTO3WwkvLZ_PAT9No494lanolwzMXWHpcXRgZzpA=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/SNox1U3D_Fk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAOgnzw-afyPddY7LjCR6MWs9SoWA',
      views: '39M views',
    },
      
    {
      id: '18',
      type: 'Movies',
      name: 'Sweet Girl | Official Trailer',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=NiFuJV2GLkY',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/NiFuJV2GLkY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBDxCv74-L19cSF57YILwJ2rHiEGA',
      views: '19M views',
    },
    
    {
      id: '20',
      type: 'Travel',
      name: 'Hidden Gems & Secret Spots,SANDIEGO',
      author: 'Jaycation',
      authorurl: 'https://www.youtube.com/channel/UCaJYATsZxIJuJfLmCo4aj6Q',
      url: 'https://www.youtube.com/watch?v=OXOVOeSFjus',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTA6ORFTC4rSL1NLaDUMExV74-K6cWa2KhD4YRewCo=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/OXOVOeSFjus/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDFvIw8kDmg4DnlyUIIbq1eTLrWtg',
      views: '206,437  views',
    },
    {
      id: '21',
      type: 'Movie',
      name: 'THE PAPER TIGERS Official Trailer (2021)',
      author: 'Movie Trailers Source',
      authorurl: 'https://www.youtube.com/channel/UCpJN7kiUkDrH11p0GQhLyFw',
      url: 'https://www.youtube.com/watch?v=1zM3IpjY3CI',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/1zM3IpjY3CI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCu9k64lx1MIZVAsmYAiPLkEW3mGg',
      views: '571K views',
    },
    {
      id: '22',
      type: 'Travel',
      name: 'SEAPORT VILLAGE IN SAN DIEGO',
      author: 'MattEoh90',
      authorurl: 'https://www.youtube.com/channel/UCf9Nr3bNtxBILfOf2Y9wU9Q',
      url: 'https://www.youtube.com/watch?v=qNiXuRklHf8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ5K1TA__jHDZsM-xT2TKzN_PN9rWq2hmAJafs17w=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/qNiXuRklHf8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBxykUPN',
      views: '124  views',
    },
    
    {
      id: '24',
      type: 'Interview',
      name: 'Pooja Hegde | Most Eligible Bachelor',
      author: 'Netflix India',
      url: 'https://www.youtube.com/watch?v=GTvvnY7kTOg',
      authorurl: 'https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/GTvvnY7kTOg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDRtaeQyiPR5fc5UsacWdlhJlZXSQ',
      views: '9.8M views',
    },
    
    {
      id: '26',
      type: 'Music',
      name: 'lofi hip hop radio - beats to relax/study',
      author: 'Lofi Girl',
      authorurl: 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow',
      url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLRBxyT5Y9xKYWPmnShA_utGUvcJnxWaFmc0CtWTkg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdFbi1Gx9FyFCNirG605gfmuAb9A',
      views: '58k views',
    },
    {
      id: '27',
      type: 'Travel',
      name: 'Cancún, Mexico 🇲🇽 - by drone [4K]',
      author: 'Drone Snap',
      url: 'https://www.youtube.com/watch?v=W-zf6fgo4A8',
      authorurl: 'https://www.youtube.com/user/TheSushiminator',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTF_K2FAgJaZ9gxNBG62Wi2dkXwAdCeJqUjqup6Fw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/W-zf6fgo4A8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu60XVpmFSa9bHjmu2y7cTn80UHw',
      views: '432k views',
    },
    // {
    //   id: '28',
    //   type: 'Nature',
    //   name: 'Tigers 101 | National Geographic',
    //   author: 'National Geographic',
    //   authorurl: 'https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A',
    //   url: 'https://www.youtube.com/watch?v=FK3dav4bA4s',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLTdh4vj3oGXpCXT3lMqha9_Qq4-JvMBlpztnHvi_mI=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/FK3dav4bA4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_GyjJvppj9rN_y8W7R4bN4MP3TQ',
    //   views: '3.5M views',
    // },

    // {
    //   id: '30',
    //   type: 'Nature',
    //   name: 'Our Planet | Deserts to Grasslands | Netflix',
    //   author: 'Netflix',
    //   url: 'https://www.youtube.com/watch?v=XmtXC_n6X6Q',
    //   authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/XmtXC_n6X6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqA-zo_7E-ov9VhUtJi-5sBPHrUQ',
    //   views: '24M views',
    // },
    
   
    {
      id: '33',
      type: 'Earth',
      name: 'EARTH in 8K ULTRA HD',
      author: '8K Videos Ultra HD',
      authorurl: 'https://www.youtube.com/user/programmingwithmosh',
      url: 'https://www.youtube.com/watch?v=QSNa8U1yGrM',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSelHSUNQBi9u-1QptMfOq8LOx7UUg_VNrZ9GTX1Q=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/QSNa8U1yGrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvILfq0m2tlhKLQ41_kCbhttvbkQ',
      views: '5.76M views',
    },
        
     {
      id: '39',
      type: 'Nature',
      name: 'Our Planet | High Seas | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=9FqwhW0B3tY',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw',
      views: '19M views',
    },
    // {
    //   id: '40',
    //   type: 'Sports',
    //   name: 'Buccaneers vs. Patriots Week 4 Highlights',
    //   author: 'NFL',
    //   url: 'https://www.youtube.com/watch?v=y3VebhRs0GQ',
    //   authorurl: 'https://www.youtube.com/channel/UCDVYQ4Zhbm3S2dlz7P1GBDg',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLQQ8np3nnw8dP1yLcnsSIcCbE_aU5YjrA-WyqAsXGk=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/y3VebhRs0GQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChj7ysBEDEKAsQpq1hU0989bQCrA',
    //   views: '3.2M views',
    // },
    // {
    //   id: '41',
    //   type: 'Sports',
    //   name: 'Steelers vs. Chargers Week 11 | NFL 2021',
    //   author: 'NFL',
    //   url: 'https://www.youtube.com/watch?v=6kn3Dkaq4yI',
    //   authorurl: 'https://www.youtube.com/c/NFL',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSYGtZ9i8jDd7fiw278IYvZ9sdXsDJDfBIR66PHHX0=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/6kn3Dkaq4yI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASb2GxfzRhXDjTgwXRcgWOTAX9wA',
    //   views: '648k views',
    // },
    {
      id: '42',
      type: 'Nature',
      name: '15 Unbelievable Places that Actually Exist',
      author: 'Top Fives',
      url: 'https://www.youtube.com/watch?v=po2T3OX5WfE',
      authorurl: 'https://www.youtube.com/channel/UCbAlVnKhbGLK78GsSemQXxw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQv_r7o-o1BqJeA5WA5IOMKUBW7R5Tx8zXxZe-iMQ=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/pFoty21X370/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLCFuoPoabOJtKHy8OiW8Pl4M1UnBg',
      views: '777k views',
    },
    {
      id: '65',
      type: 'Travel',
      name: 'The American "Wild" West - Traveling Robert',
      author: 'Traveling Robert',
      url: 'https://www.youtube.com/watch?v=LVi4NrXfxUQ',
      authorurl: 'https://www.youtube.com/channel/UCLM5XNynW9u1_usGYL98YKw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQfcEpCc7aTdiPBF7o8m2L5TwwEZB3Ip05eXzkRuQ=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/LVi4NrXfxUQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLB9O',
      views: '1.7M views',
    },
    // {
    //   id: '44',
    //   type: 'Cars',
    //   name: '2022 Tesla Model S Plaid',
    //   author: 'Ryan Shaw',
    //   authorurl: 'https://www.youtube.com/channel/UCfv7-e6_6ZhvDL9-7Yw5OVA',
    //   url: 'https://www.youtube.com/watch?v=SLtV_2Z1_x8',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLQI1st1iLZ2o7cjSqCc9276i07XaCFr-cvYID2W=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/SLtV_2Z1_x8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGm--Wk5G7xsGtflg4VSuYAdIOGw',
    //   views: '104K views',
    // },
    // {
    //   id: '45',
    //   type: 'Cars',
    //   name: 'Midnight Run II (R34 GTR / RX7 / S15) | 4K',
    //   author: 'Hartnett Media',
    //   authorurl: 'https://www.youtube.com/channel/UC9iy0bQd8OddxuHl1e3qkzw',
    //   url: 'https://www.youtube.com/watch?v=u9fftcQGSa0',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLQ5-7SQSVz7C_kfRLqPg_eZxW1rb-lmoZLwR70a=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/u9fftcQGSa0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI2FygFEFMeaNCwhEOSq99CxeOnQ',
    //   views: '2.4M views',
    // },
    {
      id: '46',
      type: 'Travel',
      name: '25 Most Beautiful Destinations in America',
      author: 'touropia',
      url: 'https://www.youtube.com/watch?v=NUDBwBJeKvY',
      authorurl: 'https://www.youtube.com/channel/UCh3Rpsdv1fxefE0ZcKBaNcQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSXiYvAveorGOwNEUyGsp9W9XoGh3PZITwZmmlh=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/NUDBwBJeKvY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBVBbfhH5NoCbSumNWt2kbkcKuGDg',
      views: '4.8M views',
    },
    {
      id: '43',
      type: 'Coding',
      name: 'C++ Crash Course For Beginners | Traversy',
      author: 'Traversy Media',
      authorurl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
      url: 'https://www.youtube.com/watch?v=1v_4dL8l8pQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/1v_4dL8l8pQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjr4NNOP2jC6hru7EGGRLpION5TQ',
      views: '259K views',
    },
    // {
    //   id: '48',
    //   type: 'Cars',
    //   name: 'Aventador SVJ: shaping the future',
    //   author: 'Lamborghini',
    //   authorurl: 'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw',
    //   url: 'https://www.youtube.com/watch?v=viW44cUfxCE',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSASv4CCrVU31tCD0SQUb9UYkgYPddiB7tpCM4QGrA=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/viW44cUfxCE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnOAndwPWgASpd-hBHreVF1AzRZg',
    //   views: '4.5M views',
    // },
    // {
    //   id: '49',
    //   type: 'Food',
    //   name: 'The Hot Dog King of Tulsa | Munchies',
    //   author: 'Munchies',
    //   authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
    //   url: 'https://www.youtube.com/watch?v=W20wnEQTWUs',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/W20wnEQTWUs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgFK4kwYdOrUN90Hdva3ycap-dNQ',
    //   views: '1.5m views',
    // },
    // {
    //   id: '50',
    //   type: 'Food',
    //   name: 'The Menchi-Katsu King of Tokyo | Munchies',
    //   author: 'Munchies',
    //   authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
    //   url: 'https://www.youtube.com/watch?v=UVZMF6sZp_g',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/UVZMF6sZp_g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtfLUG9bNaHx8IsYsDe5SmPulLsQ',
    //   views: '74K views',
    // },
    // {
    //   id: '51',
    //   type: 'Food',
    //   name: 'The Rotisserie King of San Francisco',
    //   author: 'Munchies',
    //   authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
    //   url: 'https://www.youtube.com/watch?v=mH7vFc0bUpU',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/qZpjRF9j-io/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9u3jIEsIDpL9o0OfoyQAS0savxw',
    //   views: '1.3M views',
    // },
    // {
    //   id: '52',
    //   type: 'Food',
    //   name: 'The Tamale Queen of New York | Munchies',
    //   author: 'Munchies',
    //   authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
    //   url: 'https://www.youtube.com/watch?v=xB98UsKLoGk',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/xB98UsKLoGk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfPl8bsJFnnmw8BJCm9X814X2Rvw',
    //   views: '6.8M views',
    // },
    {
      id: '53',
      type: 'Thriller',
      name: 'AWAKE | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=2fuowcxdrYc',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/2fuowcxdrYc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLBaMtc25Nm5l1BYasbWS8pBtQywBw',
      views: '3,311,745 views',
    },
    // {
    //   id: '54',
    //   type: 'Food',
    //   name: 'Street Tacos of Texas | Munchies',
    //   author: 'Munchies',
    //   authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
    //   url: 'https://www.youtube.com/watch?v=0jTHnyobAGU',
    //   avatarurl:
    //     'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
    //   pictureurl:
    //     'https://i.ytimg.com/vi/0jTHnyobAGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9R4hna_gtZ8fkggyaLm8VNd03_g',
    //   views: '2.8M views',
    // },
   
     {
      id: '57',
      type: 'Movies',
      name: 'RED NOTICE | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=Pj0wz7zu3Ms',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
      'https://i.ytimg.com/vi/Pj0wz7zu3Ms/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAFis74I8UnqVHrPJvg2qQWa-uR4Q',
      views: '22.3M views',
    },
    {
      id: '58',
      type: 'Movies',
      name: 'BEST UPCOMING MOVIE TRAILERS 2022 ',
      author: 'FilmSpot Trailer',
      authorurl: 'https://www.youtube.com/channel/UCWOSgEKGpS5C026lY4Y4KGw',
      url: 'https://www.youtube.com/watch?v=hhZBDO0CKJo',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLS22sEGwvqIR8rD85kOxGMNBPNRRyHhrQqelUhB9w=s48-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/QGj73UD8LUc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLDl7exYESAtdavwfDLmsnPytsidgg',
      views: '4.71M views',
    },
    {
      id: '59',
      type: 'Movies',
      name: 'Hypnotic | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=eHsWYmnXk1o',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/eHsWYmnXk1o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLCUJG65xHShpqTbInzL8C1f2vEdGg',
      views: '22.3M views',
    },
    {
      id: '60',
      type: 'Movies',
      name: 'MAID | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=tGtaHcqsSE8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/tGtaHcqsSE8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAGNVJEERuzRNUT7snNTSPly69QHA',
      views: '22.3M views',
    },
  ];

  constructor() {
    this.filteredItems();
  }
}