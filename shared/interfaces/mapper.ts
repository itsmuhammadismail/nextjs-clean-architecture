interface Mapper<Entity, Model> {
  mapModeltoEntity(model: Model): Entity;
}

export default Mapper;