import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HealthyItems from './../HealthyEating-Items/HealthyEating-Items';

const HealthyFilters = () => {
  const [types, setTypes] = useState({type: 'one'})
  const ref = useRef(null);

  const handleSrcoll = () => {
    ref.current?.scrollIntoView({behavor: 'smooth'})
  }
  return (
    <>
    <div className="filters-back-healthy">
      <div className='healthy'>
        <div className="container">
          <div className="tea-filters__inner">
            <div className="filters__left">
              <ul className="filters-nav">
                <li><Link className='filters-nav-first'to="/">Главная</Link></li>
                <li><Link className='filters-nav-item' to="/">&#x2022;Каталог товаров</Link></li>
                <li><Link className='filters-nav-item' to="/catalog/healthy">&#x2022;Здоровое питание</Link></li>
              </ul>
              <h1 className='filters__title healthy-title'>Здоровое питание</h1>
            </div>
          </div>
          <div className="tea-filters-kettle kasha"></div>
          <div className="tea-filters-blocks">
            <div className="tea-filters-blocks-top">
              <div onClick={()=>{
                handleSrcoll()
                setTypes({type: 'one'})
              }} className="tea-filters-blocks-item-hfi">
                <img src='https://avatars.mds.yandex.net/get-mpic/7660527/img_id6827102340375698673.jpeg/orig' height='182px' alt="" />
                <p>Цикорий и корень цикория</p>
              </div> 
              <div onClick={()=>{
                handleSrcoll()
                setTypes({type: 'two'})
              }}  className="tea-filters-blocks-item-hfi">
                <img src='https://avatars.mds.yandex.net/get-mpic/4250892/img_id5980908321901524472.jpeg/orig' height='182px' alt="" />
                <p>Ячменные напитки</p>
              </div>
            </div>
            <div className="tea-filters-blocks-bottom">
              <div onClick={()=>{
                handleSrcoll()
                setTypes({type: 'three'})
              }}  className="tea-filters-blocks-item-hfi pprrra">
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXGRcVGBgYGBgYGBgaFRgaFhoaFRUYHSggGhomGxUXITEhJSkrLi4uGB8zODMtNyotLisBCgoKDg0OGxAQGyslICUtLS0tLS0rLS0tLS0tLi0tLS0tLy0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANUA7QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwEDCAL/xABIEAABBAAEAwUFBQUDCQkAAAABAAIDEQQSITEFBkETIlFhcQcygZGxQqHB0fAUI1JikiRD4RYzNERygpOywhUXVGNzotLj8f/EABsBAQACAwEBAAAAAAAAAAAAAAACBAEDBQYH/8QAOREAAgECAwUECQIFBQAAAAAAAAECAxEEITEFEkFRYXGRofATFCIygbHB0eFC8QYVIzNSYnKSk8L/2gAMAwEAAhEDEQA/AN4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLB4vOWRFzdDoL9SoVKipwc3ok33GYq7sZy+cw8QqPicQ9/vOJ9SSPksRjddlyntiPCD7/wAMserPmbFRUzB4+VrhTzWmhJI+RVzV3CYuOJTcU1bn1NVSm4ahERWzWY+Mn7NpdV+Shp+MSH3ab8LP3qS4yf3fxCrjyvPbUxdenW3KcmlZPK3Xjr4luhTi43aMlnFpr9+/91v4BSGF4uSQHN3rXb7lBMOqyYD3h6j6qhTx+JUlabefF3+d/A3OlBrQtqIi9i9TnBERYAREQBERAEREAREQBERAEREAREQBQ3NGJZHAXPe1jbGriAPmVMqA514fDLhJnTRtf2cUr2lw905DqD02WurTVSDg+Ka7yUXutMoc/N2BH+tR/BwP0WKznPA3/pTPv/JaZdIA0jQGl0QOorn/AMopLLefh9jd6xJpvI39gOZsJI4BmJic7wzC/gCtqLzD7KuHQ4niUcU0bZI3NksHYlrCRdei9MQQtY1rGANa0BrQNgGigB5UFZwuDjht7dd725cL8jXOq52udyIitmsrPPmCfJhJHMnfD2TJJDkA7xawkAuOo26HqvN83Epy0l2InJrrNJ/8lvP2tc2Nw2HdhmEGWZpa7+RjtDf8xGg+J8L87zSWT4IqcW7tK/YLtGVhOITF2s03/Ff+aufs4jxGKxohbjJ4+459lzpB3a0yPdXXda+aaVp5C5gOCxTJ8uara4dS12jqPj1Hoo+ig42lFdyMuV3dfU9RRggAE2QBZ2s+NBdixOHY6OeNksTg5jxmaR+tD0pZakYCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAtLe2XngODsDA7ug1M4H3iP7sHwHXxOnjdq9q3OP7FB2MTqnlG/WNmxd6nUD4novNuLxBc46rKRhnTK+za+bQrhTIXZLcB4nJh5WSxOLXsIc0jxH1HQjwK9Q8k80x8Rw4kbTZG02Vn8LvL+U7g/kvJTXUrZyNzTJgZ2zMOnuvbej29Wn6g9CotEos9WKu868zMwGHMhoyOtsbfF3if5RufgOqleF8RjxELJ43Wx7Q4H6g+BGoPovPPtI5jdjMU9wPcaSyMfyg7/Hf4rCJFX45xV88rpHuLnuJLiepKiiVy8EHVcEqRBu5wuyKWiuoOXNIDanss52/ZZOxld+4kOv/luOmceXj8+mu+wbXjzCEtXob2RcxHE4YwvNvhoDxMZ2+RFemVRZNF/REWAEREAREQBERAEREAREQBEVdxHNkMeO/Y5O6SxjmvJ7pc4u7h8DQaQeuavC4yko6mG0tSxLqmlDGlzjQaC4nwAFlRnHOMiAECs1ddh6+Poq1xXmEycMxZcR2jWOaS0UCHkMsCzXvVutPrVL0vob+15yLPq1T0XpbeyaO5z40/F4qSZx99xIHg0aNHwAAVXljpSkuriusQ2rZVauRdr5tZE0VOIXXlCi5pE40m1cNbayYYi3VduEiFBZRYpmtI2L7O+anR4LGYcn+6dJH5ONMcB/UD/ulUGc24ld3LQc6TI3UuBaB42FKS8uTtcQ5oadDRJBr5KDaWpthCUvdVyvvgtRssVGlsHD8mYogHsHEHUEB1EHYjRRXFeSsaHWMPJXk1x/BapYikl76v2r7k40JXzRUsizsJh+pWd/kljf/DS/8N35KZwvKWMof2Z/9LvxCRr0+Ml3r7idF8IkGYlePY1jyzHsb0ka9h/pzD72hQEvBpWmi0AjcFwB+RU37NeHPZxCAuArMdnNP2T4Fbd5cyPoprNp9x6FREWCAREQBERAEREAREQBEXw5wAs7DVAQnEua8Nh5TDK57XgA+44ijtRqitR81j9pxpe06SvAB27ujQaP8oBV55ofBintL49GaNdmLS4E9cutX9SsEQQNIPZttpsHXStLzWV5/F43enZNOKfJlpbKxFS2/ZLlxsYXMmOpuSya01JPUN1O51v4L54VhjLhcRFtmiAJPTvsP1XXzBwwyM7WE5srml0e5Ise4R4EE15n0U3wnCGHBSGRrmveGtF/ZaCDv4k2obOpuWKpN6b132aeJ2cfUjDA1VHXddl118Ch/wDd82i7t3k+AoHrtbFl4T2fx5WE4hzM+es1Gsl3meGZR7pOp6Kwwg9QdPI3/wAv6Ck8FCJIGNdDiXBpkAdHVHM5wPUWacRt4r1+1oVqVBPCwTlvK+UXZbsn+rL3lG/G2h4HZ1f01e1acrbr0b1vHl0v05lEx3sxgJzHHN2ze+za6v3dr0tYjfZnAf8AXW7B3vs2OgPu7E9VduMjDwtDZY8RHmstLso62SLdVgENvwUVFxDh+vdl1/mB10t2rveOUarhxltRq7g/+un9zup4NZKpL/lL7mBH7LGBt/tgI2u2mz4CmanyUTxPlBsMjonPe4trUBhGtEb10IV2w3E+HgtIEtgsI1adWDK3Qu10rzUXzBixLiHyAZQSNHdKbWoB30XR2RHHVcRKOLp2hut3cIx9q8bL2ZPg5X0ORtWvSo0U8NUe9vWed8rN8U+Niu8E4G2KdjmueSO9RaB94Kt2PlcGkd8bfYFHXbMNvxURg9ZG/r6KYmLCw/MUxw28+itbTpQpzSgrZdebL38P16lalKVV3alyXJckiYGJhc2ItxEbHNhZGbsOHu5hmBB6HTzKxOJ4nuj+3xg90H945oNAA6g30O1Xm12Cl+Huf2DRc1lseUjBtcGgDUA13wbGp8PNYuH4bFKHdrGHHOQS5ojPekLSS3o6vs+Oi8zPZ8Vb2nm+Uer5M69SsoLTjbwvyIGXEAggcTjvSjnA+JAND0G/VTuCxTbYXY6NzA5zqzt1BNtBN61t+KqfGMPGGsAjY3v0aaATo4975DTyVol4bDFFG5sTLIaDfeHeia+yPsnMdAdx5LW9nqSb3tL/AKY/HRdpXWOi1ezKrx2VrsRI4EEFzyD4izrusfhGKMMolBALDn/pF+PWvvX1jj+8d6n6nzWKGWHi9/E+fqunFbtNJcFl8EWK7/oyf+l/Jm/I8S0xiSwGlodZNCiLslQGL50w7TljuU+LdG71o47/AAWpOZubn4hjYGFzYIwxjRfvloAL3+O2gXTw/igZpqT3coHw+Qu/mp+sJvI87VxzUt2Pebgg5tzf3X/u/wAFP4GcyMDy3LeoF3p0ta35Na/EOHTy/hHX1/xWzo2gAAbAUPgt8XfMs4ecqkd5vI+0RFIshERAEREAXVNEHtc07OBafQiiu1EBrrjOBmgPeDnMGzxq2umbwPr8FAcOY7FyiJndsFznanK0bn+bUj5rZXMHHo8KAHNc8uB7orYb2SVh8CwGEmrGYePI9wc0kd0j+Jr2g0dQPuK4v8toutaMurj+e7mdWO2PZcGlvW1Xza+3cQEvJrWtLmYiYmjfu+HQZd/JcYrEfu3Mc4e5Y0AzURY97eiD+KtOKBjeDlefHKxzr8NhuoF3DnDDTyyxFp/uw6i5ozb6XTqNbq1SwiWKpOmrLeTfwafjpbPmasRit7CVVUld7rS+KfyKmZCWjYb7AN6+TlZOW8N+6bIyJryA8OJxBZQdmBzMAIGh3+KrF01ve116nx/2laeWnB0YMcsQkZbi0wZ5asmw4Ot2hG11svZYn+1+/wBMzwOz4p4jPW3TW65/uVTneFjWx5GNbqbyTmfp1v3fx+C7eEcEwbmYNsrJO0xQcM7X0Gub1LT6jouvnvGtlykSNkcCQ4iF0JutnZiS47+mqzeF+/wYf+ofkAqNfeyvk7devPM7WH3bPd0v06csiGOJ/Z+1ha0dqyR8bZtnNYCWuDfBxLRTtwHPA3WNFsP1+K7+O4d4nnkI7hnmAOm/aP6bj3Xb75T4LGY7T9fmrmFtqczaV3Bdv3MrBH9439fn9FnOj7o7v8X2f/r/ACWBgHXI3/8AfxP0We9vdGn8XQDw/kH4LmbXf9SPZ9Wdz+GVahL/AHfRFy4e5zMPHmbGY3NFF+LoXQvJbbjP8rTooE8QxDc7MPCJcriT3y+u+S0h1d43160pjhrCYGxHDNjY9oeXOxHZmXK2y4gNLiKBNbBRfDZI2Ol1jDe0iLc0lNyslJzMcaLi0CxprpY6LlSSdr+cmdPE2S+PPo+rzKzisVLOYhlY0ucS394SXZWusupvdG+/UVW6usOGxjo2tcyAAtFHM4XlaGhxJZqQ0fJUnAYQtxELrzB0j6Otn9091nQD7Q+NraT9WtIdYOXQeTALPhroqWKrOje3bwz1V8+y3HXjaz14alCpBNrnz+/U1bxAFsjwdw4g1dWCdvJYMwJbIGgkltAAGzZUhxcfvpdPtu/5j5L65ewTpZ2xsOVzs1Gh0aT1FdFagt6C7PoXq6/pyS5P5FPl4bO1uYxOA8a8NP1akeVuDPxcwiaWtJ3L3BtfA6uPkArLzA/FQW18rXgHVr2NadBsS2lS8RKS/O2mOuxRoX4grTKmo8GeOkop2fdo/qej+BcGZhY8jdT9px3J/AeSlFrX2e88GQtw2Jd3z3WOO99GuPW+hWylehJSV0dqjOMo+zp8giIpm0IiIAiLglAcooHjPMUOHIa8nMRoAPHQZn7MBPiq1NzhJmJyNA2AduL2o3rfnXwWiWIhHIv4fZmIrR3oxyel+PYTPOPLj8XldGW20ZacS3re4B+ikeWeEnCwCIkE2XHLdWfAnfproqa3mqYvsOFbV3Q0n4tJ38/UhTGA5yaSGyZW9CbNX5AjUehVeNWj6RztZ6XJ1NiV4PfSTfQuaieaf9Fm/wBkfUeR+izcNiQ8CiNdRWx9FUua+YoyZMK0EktILgdMw1ynyoVfjp4q9TqxU4vnJLxOfKhUqQqKCvaMm+xJlKYTkbV9f4vH0CtPLwn/AGbudh2ZJzAsdJI7vH32ssnyvpSpDHChofgR+SteAwLXwQPGElkdUlyRuDDfaOqzl7xrS/gvS4hLds+fTq+Lt50Z47ASfpXbhHrzXJN+dVqYHOXCzLK2CJsYkbZdli7EagEaknNvvpSxeHy8SiyYeN0YytIbQaXAA0dS3fVSPFOISQyw3DiLIe1rZ5AbvU5XECgMut+SwOGccc7FHs4gZGh7THnAynNRBdtoW1XXRcPFTxHpowhFONuLj1vxS853PQUXSUJNtqW9yfTpy8rQx/8Asqd0ZiDWGiJ3uzk2SHizexom6/hHgVHSRGMlpIsCtDp8DporBgeLPuZ0cIc3sxnBcRlbqTrpZonTWq8lA4qS3E3v4fh3guls+Va9qqSdle3PLqznbUVL1eMot33uT0s+i5I+8F/nW+h8/utd7ZQRVjS/s1v4Vsunh7bmaPJ34rNdwx40zN0BNE1+uipbX/ux7Pqzr/wy0qE7/wCX/mJZIMU2INDcTM0FkZLOz7aOzGMwGZ1bk6ADwWNDwSDEhxczN3hRaGs0e9wzZDdAAXlHorBwiWTsI2FmLILGlrgYW5dBWR2YGtdGvBNKq4jmDsC5pifI4yCs9B2dry5pcAR3rOo2tUKdlr5zR066nNWgtHnZ8LPklxK5LhQXtjhhjzBpeXHNZp2XSttxp6k+Vm4dw6caFkRIG2Z+h6E60dtvMKtT4oySB7BJG4NDCWOjF3Ru82xJGu2o6qTwmOOUXJPsPtAabjr5/epza3smrfAjRg9xJp34+99HYjsdGWyPDhqCQa8QemileQR/bovV/wDyO8lEYrVxO5Otnf4mlNchD+3Rag6v6/yOVeOpdq+4+w2RzDy5h8azLMzX7L26Pb6O/A6LVXGfZXionExObMzoR3Xj1b1+C3einOlGepxKmHhU1WfM83cQ4NPhxbtCw31Dm11o9L1XoXhWIMkEUjtC+Njj6uaCfqu2aNj+68Nd1yuAP3FcYidkTC53da0f4AAfdSxGmqd2Ro0FSbaev0MhFg8O4lHOCWE900QdCDVrOU4yUldO6LCaegREUgF0z7fH/FdyxcYDlJbuO8Ph0+VqM/dZKCvJGoMfxJzpi9zGhzySSx7jrmoa5qqq8qXMUzCMrmvrUU7UCz0ohw3OqsXMHAO0eJ8M0OFU6OwHX419pp0sWNLrdVjG8ImiDTKwsB0F1rmBsb+QNHyXFs1nqufB+fwe+oV6FeMVFpP/ABvmrcLXvl3cST4pwnCxta6KUOv+Zt7nbugjUAdVHQTBpBGh0F1fW9CTZ9QfHRRmY3QsUTqCXDvVYIPh92vgs2TCOADnNPZnrTmhwAHuuI3O1bjyUW1qlY3qjKEbVJN34u37eeBZeF8ZdDh3i6L3Ux2tNNZXZXX4VsNLUDhpwJXAncEHY2DubOo1o6aknwtZPF+Msfh44WxiMRmhTjR6E0dyTrZP1UMJWsDn96w29aJ010I8q3Vig7VYZ5JrpxV/3OfUw+9ha8nGzkp5ZPg1HTLTxuZ8OBYdif6gfuaFaeX4zFEAGxEuzmnTSMMgY4hzjFlLCAAel01auh5gh2JePVo/6bU5gedHxsDIsSWsF0Mugskn3m+JK9tVqQqRtGpH4ytz5Z65+cvj2GpVaM96dKWlso35dLdPxdOW5scGyQTRMjAJc5rmSOexxb3SKOUsIvpW48FC8KL453TgszyE6ZXBtuvoDepB6+qx+L80dsW9vOw5by2Gtq6vYDwCw2cehG0zNNtj9R5n5qKp0XZyab096+WfP7Fjeq+04xkle9ty2dknlZ/Nk5DM+EPLcuWVuU6GqN6AWOl73067YTzqfTYbLH/7ZYRrKw+n+A8z811O4zhxu/5Bx/BbouhB729FN9V9ylVWKqrc3JtLRbv4JLCuDX5tRTHa1/KfFfWGxuvck/pf+RUKOMxSZmxgk5Xa1Q2Pjqq4Bv6rkbRcatROMr5cO09HsSU8NRlGcNZXz7Ebfh4+7LlMGHdpGCXMNnshlYXEO1IH1Vb5ixbnSCUgZnSGStau83ytU/CTef1WHx2Z3dovHxIH1XPdNpXudqOKjfKOvX8Fohx2U6MG7TufsCm/Ghv1s+KmMPLmAPkFqyKd2Yd52/8AEfzU2zEnxd8z+awqe8tTLxUYv3fEu00Yu/yXbwTircLL2zae5lkNvfMMpNA7AG/gqBIL81nct4dz5XRtNFwIHytYnTai2nwZprYpyhJKNsnx6dhuPh/tIsjtYgWn7UZ2/wB135q5cL4xDiBcUgd4jZw9WnVeesMyc4ktaMmVtvBNNoWBfjqpfhOJe5z3xZmSQ6uLToLNWK1rTfbxXLp4yvB+17S8V3ZHEp4qatfO5sc8IxJx2fK4R58+fM3QDpve2lUrTxjA9vE6LNlzVrV7EHb4Km8uc+g1HixlOwkGx/2gPqP8VfI5A4BzSCCLBBsEHqCFcwsaEoydN3Um2/jr58S5ScJJ7pF8vcFGFY5ufOXGyay7bCrKmERW4QjCKjFWSNqSSsgiIpGQiIgKrx/hz2HtIrrcgbj0rooT/KCSqdkePBzQVfMRFYVY4ty1HKbIcD4tJH0XIxGy3KbqUJuDeqTdvB/c6mGx8FFRrQ3raPj5+KISLjL3PDYYIQ86NyxNB+arfGeJySSOEpstzNFjKLB1oVsKO/j1VrwXLJw8naxSPzAEDM4ka+XwTjOHw2ILTiCYpG0C4e44A2BZBF6neiq/qtanlUk31zcfw+1WeVs8jsYTaOFVS+5la1/1d2d0+jus20URjBp69T6jT4j9armbDSmCZ2V3ZhheXUcuhA36XY891av8k8M7KW4qxrdBri63HpfgaqlYsTwVv7DPBEHU6OQ273nvLTRPxA+SsUINzXanz89vddljaO1qPq8owd3JNZpq3C+ds+XjY84+PqvvC4kforExRIB18vmViwPojw6+i7R4m5I8ZBIB0q1FM3HqpXiDu4oyD3goSWZujK0GiVjlKFwK6JXZW6b9Fi4aSnDz0UzUyd4DAXSuaN8rz8mlx+hWPiJSAf1uVcPY/gBPxHUW1schd6FnZ/8AWqxzXwx+FmfBICHNcd+oGxHiCsAjcLMQRfU/VZvFTbFH4eJzjTWlx8AL+izuKNc1lOBBNb6brLCdiMwwtwUi9+Vtn9XsozDaOHyUriMLI5oIY4jU2ATtpf1UUrEpS3nc6MLOS6j1V59lnD+3x+U7Bj3H+nKPvcFrsGiD5raXs54g3ARy4l4HaSZY4gf4TbnOPWu631WKklGLk9ERcklcmeaeX6c4OsOqg4aWOmqp+Ii7CLsiwElw/eVrZOhJ6dAtq8F4+Me/sJmsJLSWvZYqtaIJP1Ufx7laSOy0Zm/r5LjVKCqL0lHNXzWma89jKU6Eaq3qfHUoEk0gdFEWtfdM7nvEj7Rs1del1r4q28t8bxGAcGvDnQO+wdx5x+fiOv3quYvgoa8SNc6J7TdEW06UfTdfOMnncMpdDWnec7M3Qg+5WpVLfnTqJrJ8b5dvRq3JleNOUJXd0zfOCxbJmNkjcHNcLBH60Pksla19neLxLW5Wwl8RcM9PFMJ0zNDyHeZBu9wei2UvQ0am/G/n4HTpyco3as/ivmkERFtJhERAF8lgX0iA+DGPBdbsIw7tHyXeiA6G4Zg2aB6BdoYF9IgPMPtK5RmwWIeGxl8L3FzHNF0Ds1wGoI28NFVsFwmeU92Mt8390ffqfkvVeMwLZCS5oN+KjpeV8O7eMLNzFjzLxmKSEBjwNQDYNjzF/rdRMctG16jxXImEkFOiBHgQCPkViN9muBv/ADDP6W/klxY0LFwmeWNrwGgEWLdRI6aV1UbJhpWuoxOsHwJ+RG69L/5DYb+FdsfJuGH2EuLFD9kOIZgu0kmYe0lytAGuVo11rqTXyV745w3D4/WSMOA2zAX96m+F8EgjBqNumo0Xe3CgbBYMlHbyPA33BlHgBosHifs2imAzPdpsRoVsYYdffYIDUrfZHBY/eP8An+QUyzkMNAAfoNPRbBGHX32CA1032dQE5ngE+NC/nSlXciQyxll04UQ467aaq4CBdsMdFYaurMNXK1ynyj+xvL3Pa41lAaDpe5JP5K3IijTpxpx3YrIxGKirIj8XwaCT342n7vosbC8s4SN2ZsDM3ie99VMopWRk4AXKIsgIiIAiIgCIiAIiIAuCiID57IJ2QXCIB2QTsguEQHJiCdkFwiA5Y2lwGoiA5yrnKiIBlXNIiA5REQHKIiAIiIAiIgCIiA//2Q=='  height='182px' alt="" />
                <p>Напитки для здоровья</p>
              </div>
              <div onClick={()=>{
                handleSrcoll()
                setTypes({type: 'four'})
              }}  className="tea-filters-blocks-item-hfi">
                <img src='https://avatars.mds.yandex.net/get-mpic/4742551/img_id2524634304788013634.jpeg/orig'  height='182px' alt="" />
                <p>Протеиновые смеси</p>
              </div>
              <div onClick={()=>{
                handleSrcoll()
                setTypes({type: 'five'})
                }} className="tea-filters-blocks-item-hfi">
                <img src='https://avatars.mds.yandex.net/get-mpic/6269810/img_id7796361350956365479.png/orig'  height='182px'   alt="" />
                <p>Толокняные каши</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref={ref}></div>
    <HealthyItems type={types.type}/>
    </>
)
}

export default HealthyFilters
