import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://instagram.fmcz8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117105279_2649948381884061_2656661289186565748_n.jpg?_nc_ht=instagram.fmcz8-1.fna.fbcdn.net&_nc_ohc=Ej2PmlsSdsUAX9wfjKg&oh=ade4bcb26a8daf35a6ba3af85a48fab8&oe=5FB27343" 
          nome="Lincoln Pinto Duarte" 
          descricao="Oi, eu sou o Lincoln. Sou estudante de desenvolvimento web Front-end pela Labenu. 
          Já trabalhei como atendente telemarketing na AlmaViva do Brasil, atendente de uma loja de jogos
          no shopping e atualmente sou entregador de aplicativo da Uber. Adoro jogar videogames nos fins 
          de semana e treinar todos os dias."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem = "https://image.flaticon.com/icons/png/512/95/95645.png"
          texto = "Email:"
          texto2 = "lincolnskyrim_99@hotmail.com"
        />

        <CardPequeno
          imagem = "https://image.flaticon.com/icons/png/512/95/95645.png"
          texto = "Gmail:"
          texto2 = "lincolnskyrim@gmail.com"
        />

        <CardPequeno
          imagem = "https://image.flaticon.com/icons/png/512/9/9778.png"
          texto = "Endereço:"
          texto2 = "Maceió/AL"
        />

        <CardPequeno
          imagem = "https://i2.wp.com/multarte.com.br/wp-content/uploads/2020/05/5cf6d8f924c302cfaa9e748b_phone-call.png?fit=512%2C512&ssl=1"
          texto = "Telefone:"
          texto2 = "+55 82 98101-8608"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhEPDxAVEhAVEBUVFRUVFRYXFRYVFRMWFhcVFRUYHSggGBolHRUVITEhJSkrLi4wGB8zODMtNygtLisBCgoKDg0OGxAQGi0fICUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQMEBQYHCAL/xAA+EAACAQICBQkGBQMDBQAAAAAAAQIDEQQFITFRcYEGBxIUIjJBYZETIzNCcrFzgqGywTRSklRi8BZjwsPR/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAEEBQMGAgf/xAAsEQEAAgICAQMDBAMBAAMAAAAAAQIDEQQSIQUxQRMzUTI0YYEiQnE1FCMk/9oADAMBAAIRAxEAPwDeIEqVTYB4cntAdJ7QHSe0B0ntAdJ7QHSe0B0ntAdJ7QHSe0B0ntAdJ7QmEHJ7RpEyKV9NydGkbvaQHSe0B0ntAdJ7QHSe0B0ntAdJ7QHSe0B0ntAdJ7QHSYHuNTaBMTAiBKqy8AJYAAAAAAAAAAAAAMQ5zs+6nhHCErVq96cfKNu3P00b2XOJi738+yrysnWuo90nmrz/AK1hfYzd61C0HfXKDXYl948PMcvD9OxxcveGalNaAAAAAAAAAAAAA905aQJoEiesCAAAAAAAAAAAAABEb8G9eXP3L7PuvYuc4u9Gn7ulscYvTLi7vcb/ABcUUpE/LF5GXvZJ5FZ68BiqdZu1N9iqtsJePB6SeTijJQwZOl3Q0ZJpNaU1dbjz8xqW1E78ogAAAAAAAAAAAAAqAJEtb3gQAAAAAAAAAAAADDuc/P8AqeEdOErVq96cba1G3bktmjx8y3w8Xe+59lXk5OtNNFm5rTI9w+vgbu5qc96zhVh5yvVw9oadbp/I/Oy7PAw+Zi6X3+WtxcvaumblKFsAAAAAAAAAAAACoAkS1veBAAAAAAAAAAAAG7aXqJiNomXPnLvPev4ypUT91BunSX+2L735nd+hvcTD0ppj8jJ3sx0sq8yE7F95F588BiqdZv3bfQqr/tydm+GvgVuTi+pjl2wZOl9uh4tNJrSmrprU1tRgTGvDaid+USEgAAAAAAAAAAAqAJEtb3gQAAAAAAAAAAAGHc6Gf9UwrpQdq1e8I7VD55ejS4ot8PF3tufZW5WXpXUe7RZusfYSgCQgbt5qM/6zhur1JXq0LR063TfcfCzXAxObi6X7R7S1uLl710zgpLYAAAAAAAAAAAKgCRLW94EAAAAAAAAAACEmlpbsl4kxA575c5517F1Kqd6cfd0/oi3p4ttm/wATF9OjFz5O9mPllXAAAiUr3yNzt4HF0q9+xfoVFtpy0P0dn+U4cnFGTHp2wX6XdEQmpJSi7pq6a1NPSmefmPLaidxt6ISAAAAAAAAAAFQBIlre8CAAAAAAAAAANjC+dPP+q4R0YO1aveCtrjD55fxx8i5wsPe+5VeVl6V8NHG5DICQCAAEg8TA3ZzT5/1nDPDTd6uHsvqpu/QfCzT3LaYfNxdLbj5a3Ey9o1PwzkpRC2AAAAAAAAAAFQBIlre8CAAAAAAAAACEnZNt2SV2yax5RafDnnltnzx+KnVT91F9Cl9Cevjr9De42L6dI/LGz5O9lhLTgEfGzXkJAIAASvfI/PHgMVTr37F+jUW2EtfpofAr8jF9Sn/HbBk6WdEU5qSUou6aTT2p6jz+te7aidw9EJAAAAAAAAAFQBIlre8CAAAAAAAAADCedXPurYV0IStVxCcND0qn874rRxLnDw977+FTlZetdNIM3daZIEMg5FcnHmOI9ldxpxg5TkvDRaK3t/ZlbkZ4x1274cX1J0s2Pwk6FSdGqrVITcZLzT+3jxO2O8WruHO9eszEpB9vgAARIlLdPNLnvt8N1Wcr1aGhX1uk+5/j3eCMXm4el9x7NbiZe1dM7KK2AAAAAAAAAKgCRLW94EAAAAAAAAITkknJuySu29SS1tkxG/CJ8eXPHLXPXj8XUrL4SfQpL/ZF2T3vXx8jf42L6dIj5Y3Iyd77WIsuEjHt7jfHNpkDwWEjKpG1at7ya8Un3Ivctfm2YPMzfUya+GxxcfSm2Kc8mQ9GUMfBaJ+7q/V8knvV1wRa4Gb/AElW5uP/AGhrI1FAABAErzyRzx4DFU8Rp9mn0aiXjTl3rLxa18CvycXemnbDkmltuioTUkpRaaaTTWppq6aPPzGvDaid+XoiEgAAAAAAAFQBIlre8CAAAAAAAAkYPzr5/wBWw3V4O1WvePmqa77+y4l3h4e19/hU5WXrXX5aTNyZ+WT/AAgJGUc3eQ9excFJXpUrVKmx2fZjxf2KfMzdKeFjjY+9m/TC+dtn2jShzvLIYyhVw1Tu1IW3PXGS800nwOmK/S3aHPLSL105xzHBTw9WpQqK04TcXw8dz1nosd+1NsXJXrbSmPt8AQCQEylunmlz/rGHeFm71KFktrpPuvhq9DE5uHpbt+WrxMu66Z4UVzWgAAAAAAACoAkS1veBAAAAAAAEJyUU23ZJXb8kIruUTOo2535aZ28fi6te/u12Ka2U4t29W5Pieg42L6dGLnv3ttYyy4An2S3zza5B1LCRc1atW95U2q67EOC/VswOXm+pds8bH1rtlhVWADVHPJkNpU8fTjolanWttXcm9/d4I1OBm/1lnczFry1izUZ4SgABK8ck85eBxVHEJ9lPo1F/dTlokn+j3xRX5OL6lNO2G/S+3RdKopxUou8ZJNNeKaumefmJ22qzuHohIAAAAAACoAkS1veBAAAAAAA0MF52c/6thlhqbtVr3TtrjSXefHRHi9hd4WHvbc/Cny8vWuo92lDbhlSEjKebjIeu4yHSV6NH3lTY7Psw4v7Mp8vL0p491njY+1m/DCjz5bHt4AAFHnGXQxVGrh6i7M4OO5+D4M+6X6XiYfN6xevlzdmOCnh6tShUVp05yjLenr3PXxPR47RasTDCvWYtMKc+3yBAAEJbo5o8/wCsYeWFm/e0LdG/zUpanwej02mJzcXW3aPaWrxMvaNSz0orgAAAAAACoAkS1veBAAAAAAPNSainJuySbbfglpbERM+EWnUbc7csM8ePxVSvf3d+jTWynHRF8dfE9DxsUY8cMbPk72WU7uAJnUbIjc6b85uch6lhIdJWrVbVKm1XXZjwVv1MDlZu92zxsXWrKSt8LHyAAAmCGqeeLk/aUMwprQ7Qq7/kl6dngjT4Gf8A1lncvDr/AChrA1pZ4ACAQld+SmdSwOKp4hd1PozW2ErKX/3gV+Ri7007YcnS23RdGrGcYzi7xlFSTXimrpnn5iYnUtqJiY8PZCQAAAAAKgCRLW94EAAAAAAwTnaz7q+G6rB2qV04u2tUl3vXu8WXuFh723+FPl5OtdflpU2mVINHuyvm3yDruLi5q9GjapPZJp9iPFq+5MqcvL0pr5WeNj7W230YTYAISklrZ8WyVr+qdJisz7In1W0WjcImJj3CRSZtl8MVRqYeorwqQcXtV9TXmnZ8D7x2mttw+Mle1dObsxwM8NVqUKqtOnNxl521NeTVmt56LHfvWJYl69Z0pjo+AIACIS3NzQ577bDvBzlepQ7m10m9C/K9G6xjc3F1v2hqcPJuNSz8oLoAAAAAFQBIlre8CAAAAA81KiinKTtFJtt6kkrtsmsb8ItOo2505WZ28fiquIfcb6NNbKcdEfXS35tnoONijHTTEz5O99rOWHEImdeX1H4b+5vMi6lg4KatWq2qVNqclog9yst9zA5eWb5N/DY42LpTyycrLABjmd1G6ji9SSsuB4z1nkX+t134a/Dxx03Ku5P1W4yi3dJqxqehZr3pMTPsr82kVnwupvqAP4Iar55Mis6ePgtDtTq22/JJ/qvQ0+Bm/wBJZ3Mxf7Q1cazPAgABK7cls6lgcTTxKu4qVppfNB6JL+eBw5GL6mOYdcN5paHRlGrGcYzg1KMoqUWtTTV00eemNTpt1ncbeyEgAAAAqAJEtb3gQAACAJ2MD52s/wCr4dYWD97XvfaqS7z4uy9dhe4WHvbtPwp8rLqNQ0sbXv7MqADLebTIOu4tSmvc0bVJ+ck+xH1V+BT5mbpTUfKzxsXa22+DDidy2PZKxVdU4ub1Ir8rPXDj7y6Ysfe2oW7CZz05KMo2Tdk7+PmY/F9ajNl6TGoW8vDmldrfnHxZcP2oxfV/3MrnE+3CsyKajGpJ6lZv0Zo+iZIx0va3wr82va0Q9U88TlZwtG+u+ned8frkWydZjw+J4M9drwmehpaJiGfMaUmb5fDFUauHqK8KkHF8dTXmnp4HTFaaX3D4yV7V05vzTATw1WpQqrtwk4vz2NeTWk9FivF6xLEvTraYUp0fAEBEpCUty80Wf+3oPB1H7ygux503q9Ho9DE52HrbtDT4uXderYBRn8rv8AAAAAqAJEtb3gQAAAPFarGEXOTtGKbb2Jabk1rt82tpzpyrzmWOxVXEN9lvo01/bTjdRS/V72z0PGx/TpEMXNftaVoO0ePDkL1G9eU6dAc32Q9RwkIyXvqnvKv1SStHclZcG/E8/wAnL9S7Z4+PpXbJStNq1WNbW/PfhfmRj+uftlrh+ciwYfvQ+qP3PJ8X71Y/lq5vFJVOcfFlw/ai16t+4lz4n20zAfBr7jvwf22Tf8OWf7tVtkY8fqW5iZrLMqepbj9Hx6ikT/EPP28y9HSJi3s+fZqznkyH4ePprZTrf+uf3jxRqen5vPWWfzMf+0NWmt8s4CAAErpyYziWBxNHEx1Rlaa/upy0Tj6ad6Rwz44vSYdcN+l9ujqFaNSMZwd4yimmvFNaDz0xqZq2qzuNvZD6AAACoAkS1veBAAAEfg+GAc72feww8cJTfvK9+lbwpR1/5Oy3dIvcHDNr7n4U+Xl611DTJtskITDL+bLIOuYtTmr0aFqk76nK/Yh6pv8AKU+bl6U1HytcXH3v5b2MOZ8ba8R8MXzLEylUlpdoyaS3aP4PD+oczJbNNYnWmzxsVZp5VVWu54btaWppXLWXPfL6fu/vtyrSKcjULdh+9D6l90ZHD+9C5m/RKqzj4suH7UWvVf3EufE+3CZgPg19x34P7bJ/Tln+5VbWZH+67PmF3zzESTjBNpdG7t4m/wCrci9etKzrwzuJiraJmXrIMRJuUG7q115aTt6Fyr3vNJnb55uKI1MLhmmAhiaNShUV4VIOL4rXw1nqaX622zL07Vc35rgJ4atVw9RdunNxf3T4qzPRYrxasWhh3rNbTCkOjmAACI1vwluPmgz721CWDm/eUdMPOlJ+H0vRxRjc7DNbd4anEy7jq2EUF0AAAKgCRLW94EAAHivWjTjKc3aMYuUm/BJXb/QmI3OoRadRuXOfKnOpY/E1MQ9EW7QWyC7q/niehwY/p0iGJmv3stJ3ci3EiZiPMkRtv3kXlUMswdONTRUn7yptcpLVwVkeW9R59MdptefDd4nHt18L/hcdTq6IvTsehlHB6hiz7rSVrJhtSdyxvF/EqfiS/czxnN+/aYbOCNY4lVL+mf4iL1f/AD/7cJ/cf0o6Hfj9UfuZ3E+/VYzfolVZx8WXD9qLXq37iXPifbTMB8GvuLHB/bZP6cs/3KrazHr+pc+Fyzzvx+hfdmx6x4vT/inxI/xn/r1yf+JL6P5R9+hTFcsnOj/GFyqZpSi+i5ei0epvX9V49bdJnyoRxsmttcc8GRqSp5jS0qyp1beK+Sf8emw9H6Zya3jXwyOdhmvlq42GboCAAEwuvJnOZYHE0sTHSou01thLRJen2OGfF9Skw64cnS23ReGrxqQjUg7wlFSi9qaujz9qzFtS2qzuu00+X0AAKgCRLW94EAAnwlr7nfz32OHWDg+3W79vClF6VxaS9S/wcPa3afhR5WXUaacNmI+GWgBmHNjkHW8XGrNXo0GpyvqlP5IvbpV3u8ynzc3SuvytcbHudts8oYvpQfy2tuf/AD7H516/TJuJ+HqeBNYhRZXGTqw6Pg7vcZnpkZJ5Ea9lrk6+nO0vGfEqfiS/cyvzvvWffH+3CqX9M/xEaFf/AD/7cJ/cf0o6Hfj9S+5ncX71VjN+iVTnHxZcP2oterfuJc+J9tNwHwa+4scH9tkcs/3arazGj9ULnwuWed+P0L7s2fWP11/4qcL2l5ydNuolr9m7fofHpETPfXucv42t7VtD1mXki/aYt7rUTGt/C+YfL418LOhWV4VIyVtifjvvpPcei/Ux4KzZh87re0w58zbL54WtVw9Tv05uL89kuKafE9vhyReu3m8lOs6Uh9w+AlAACW4eZ/Pva0ZYKo+3RfSp31ulJ6vyu/Boxufh627Q0+Hl3HWWxDPXoAAFQBIlre8CAHitVjCMpzdoxi5Sb1JJXb9CYjtKLT425x5T5zLHYmriZapStBP5aa0RXpp3tnoePj6U0xM2Sb2Ws7z5chev34ETPzJrfiHQnITIuoYSnSkrVZLp1frku7wWjgef5WT6l9trBj60X+cFJWaTXnpKeTHXJGrRtZi0x7IUqMYd2KW5I+KYMeOP8axCbXtbxMsVxfxKn4kv3M8Jzfv2beDzjhVL+mf4iLtPPp/9uMz/APo/pR0O/H6l90Z/E+/VYzfolVZx8WXD9qLXqv7iXPifbe8B8GvuO/B/bZP6cs/3arczIr+pd+Fyzzvx+hfdmv6xvvT/AIpcP9M/9R5P/El9H8o6+gzvNOkc/wDTC9yw8G7uEW9tkentxcVp3NYZkZLRGtptjvERHs+dtW88mQ6IZhCOynVt59yT46PQ1OBl1/hLN5eLf+UNWM1WeEoAAFz5N5xLA4iliY6oy7SXzQeiUfT7I4cjHGSsw7Yr9b7dHYavGrCFSm1KE4qUWtTjJJpnnpjrMxLarbtG0wh9AFQBIlre8CAGvOd7P/Y0Y4Km/eVtM/Kkn/5PRwZocHD3t2n2UuXl6x1adNll6AhmfNbkHW8Uqs1elQtN7HP5F/PAo83N0r1/K3xce7bbyMRrz4AA/gY/mGWVOm5QXSUnfR57Tx/P9Kzzlm2PzDWwcqsU1KbisM6WH6L19NN+R35PGtg4HW3u548sZM+4WvD9+P1L7ow+J96q9m/RKqzj4suH7UWvVf3E/wBOfE+294D4Nfcd+F+2yf05Z/uVW5mPEf5rk+y+ZtgpVOjOCvaNmv5PUep8HJlrW2P4hmcbPXHuJeslwMqfSnPQ2rJHX0jgXwT3v4l88zPF9RC6m+ogFNmOChiKVShVV4Tg4yXk/wDlz6paa22+bViY0515RZPUwNephqmuL7MvCUH3ZLeehw5fq12xMuPpbS2nZyAAAfGk/wAtw80Gf+1oywM326Pahfxpt6uD+6MbnYetu8fLU4mXcabEM9dAKgCRLWNbPdKxFeNOEqk3aEYuUnsSV2yax2nSLT1jbnLlLm8sbiauJl88uyv7YR0RiuH3Z6HBj6UirEz37W2tZ3/hyRim2kldt2S2t6lvPm06jaYjcuheQ+RLAYSnRfxJe8qvbOWtbkrRW48/ysv1Ly2MFOtYX84z7LEhAAALfnq90/qRketVmeNMwt8Of/sWDDd+H1L7nkeHuctdflq5v0TtVZx8WXD9qLXq37iXPifbTMAvc19xY4Mb42T+nLPOslVsZjxE9luf0zLMoaluP0bFE9I3+IeftP8AlL0dXyAAAGK8v+SccxopwssTTTdOX9yeunLyf6MtcbkfTt/CtyMPeGicRQnTlKnUi4zjJxlF6014M3a2ia7j2ZFomJ8pR9IAgCVx5PZtPBYmliYfJNdJf3QeiUXvTf6HHNj+pSaumK/S0S6PwuIjVhCrB9KE4qUXtTV0edtHWZrLbidxEppD6VAEiWtkfBDXPPByg9lRjgqb7dZdKo18tNPV+Z/omaPAw9p7So8vJqOrUBsMxAmfYZrzV5D1rF+2nG9HD2m76nUfcj5+L4LaUOblilNR7yt8TH2nbeBitb29gAAAAeKtNTTjJXTRyy4a5azWz6peaW3Ckw2V06cukrtrVfwM/j+k4cN+0O9+Ve9dSs+cfFlw/ajzXrH7mzS4f24VvJ9JqonqbX2Zp+hUi9b1t7Src6ZiYlU08opqXS06HoV9BoY/R8Fb9leeVbWlwNaIiI8Ku9hIAAAAaGJ8teRFHMV7SLVLEpWVS2iVtSmvHeW8HKtjn+FbPx4vG2l87yTE4Kbp4mlKDvoeuEvOM9T+5s481LxuJZeTHak+YW46uYRtASlt/mfz/wBpSngaku3S7VO/jTb0r8ra4NbGY/Pw9Z7w0+Hl3HWWxjOXlQBIxMuinJ6kru2l6NiJjzOkT+nbn3lHhsdjcRVxMsLW7cuyuhLRBaIx9PubmC+PHXW2Rlpe9trb/wBP4z/S1v8ABnb69PzDn9LJ+Bcn8Z/pav8Agx9en5Po3/De3IvI1gMLTo294106j2zlr9NXAw8+X6l5lrYcfSsL6cHYAAAAAABYc5wc+n04ptNLV4NI8n6vwMts3ekbiWpxM9YpqysyXDShFuSs5PV5Gj6Nxb4aTa/vKvzMsWtqFyNtTAAAAAAAAJOMwlOtF060I1IPXGSTX6n1W01ncS+bRE+Jhg+c81eEq3lh6k8PLZ36f+L0rgy5Tn3r4t5VcnDrPsxHHc1eYQv7OVGsvC03GXFTSS9S5Xn0+VWeJdZ8RyIzOGvB1H9NpfZnaOXhn5c//jZI+E3IcDmGAxFHErCVuzLSug9MHokvQ+M98WSutvrFXJS3s39hpdNRkk0mk7NWenatphzERPhrxMzHlUkJGgJUoNDcmoeLg1BceUagE+UwAAAAAAAALka37mwkAAAAAAAAAAAPb2AG5B4HqMWxuSdJ0Y2AiAAAeWBAAAAAAIARAAAAAAAAAAAAAAAAAABAewAAD//Z" 
          nome="Almaviva do Brasil" 
          descricao="Atendimento de clientes Latam Airlines" 
        />
      
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/37/37318.png" 
          texto="GitHub"
          link="https://github.com/thelastofuslinco" 
        />        

        <ImagemButton 
          imagem="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-do---cone-do-instagram-by-vexels.png" 
          texto="Instagram"
          link="https://www.instagram.com/lincolnskyrim/"
        />

      </div>

    </div>
  );
}

export default App;
