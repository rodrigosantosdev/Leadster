import React, { useState } from 'react'
import { ContainerGrid } from "../Container/style"
import { Divisor } from "../Divisor"
import { OptionItem } from "../OptionItem"
import { Pagination } from "../Pagination"
import data from "../../Mock/data.json"
import { CardItem, 
  CardImage, 
  CardDesk, 
  ContainerVideo, 
  OptionContent, 
  StyleForm, 
  StyledSpan, 
  StyledSelect, 
  OptionsContainer,
} from "./style"

interface Item {
  image: string;
  title: string;
}

interface Data {
  items: Item[];
}

export const Videos = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Defina o número de itens por página
    const jsonData: Data = data;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jsonData.items.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

  return (
    <ContainerGrid>
      <OptionsContainer>
        <OptionContent>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Agência
          </OptionItem>
          <OptionItem border="1px solid #2C83FB" bgColor="#fff" textColor="#2C83FB">
            Chatbot
          </OptionItem>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Marketing Digital
          </OptionItem>
          <OptionItem border="1px solid #2C83FB" bgColor="#2C83FB" textColor="#fff">
            Geração de Leads
          </OptionItem>
          <OptionItem border="1px solid #314D5E" bgColor="#fff" textColor="#314D5E">
            Mídia Paga
          </OptionItem>
        </OptionContent>
        <StyleForm>
          <StyledSpan>Ordenar por</StyledSpan>
          <StyledSelect name="select" id="select">
            <option value="1">Data de Publicação</option>
          </StyledSelect>
        </StyleForm>
      </OptionsContainer>
      <Divisor />
      <ContainerVideo>
        {currentItems.map((item, index) => (
          <CardItem key={index}>
            <CardImage>
              <img src={item.image} alt="capa" width={362} height={204} />
            </CardImage>
            <CardDesk>
              {item.title}
            </CardDesk>
          </CardItem>
        ))}
        <br />
        <Divisor />
      
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={jsonData.items.length}
          paginate={paginate}
        />

      </ContainerVideo>
    </ContainerGrid>
  )
}
