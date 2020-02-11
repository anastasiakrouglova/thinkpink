class Api {
  constructor(entity) {
    this.entity = entity;
  }

  getAll = async () => {
    const r = await fetch(`/api/${this.entity}`);
    // const r = await fetch(`http://localhost:4000/api/${this.entity}`);
    return await r.json();
  };

  getById = async id => {
    const r = await fetch(`/api/${this.entity}/${id}`);
    return await r.json();
  };

  create = async entity => {
    const r = await fetch(
      `${this.entity}`,
      this.getOptions(`post`, entity.values)
    );
    return await r.json();
  };

  //   update = async race => {
  //     const r = await fetch(
  //       `${this.entity}/${race.id}`,
  //       this.getOptions(`put`, race.values)
  //     );
  //     return await r.json();
  //   };

  //   delete = async entity => {
  //     const r = await fetch(
  //       `${this.entity}/${entity.id}`,
  //       this.getOptions(`delete`)
  //     );
  //     return r.json();
  //   };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}

export default Api;
