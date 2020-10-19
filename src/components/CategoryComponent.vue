<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 div_trans8 corner4 text-white mt-3" v-if="form == 'create'">
          <h4 class="mt-2">Categorías</h4>
          <h6>Agrega una nueva categoría</h6>
          <form action="" class="form-group">
            <div class="row justify-content-center" v-if="success">
              <div class="alert alert-success col-md-12">{{ success }}</div>
            </div>
            <div class="row justify-content-center" v-else-if="error">            
              <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>    
            </div>
            <div class="row">
              <div class="form-group col-md-4"><input class="form-control" id="category_name" type="text" placeholder="Categoría..." v-model.trim="name" required></div>
              <div class="form-group col-md-6"><input class="form-control" id="category_description" type="text" placeholder="Descripción..." v-model.trim="description" required></div>
              <div class="form-group col-md-2"><button type="submit" class="btn btn-outline-primary" @click.prevent="create">Agregar</button></div>
            </div>
          </form>
        </div>

        <div class="col-md-12 div_trans8 corner4 text-white mt-3" v-else-if="form == 'update'">
          <h4 class="mt-2">Categorías</h4>
          <h6>Modifica una categoría</h6>
          <form action="" class="form-group">
            <div class="row justify-content-center" v-if="success">
              <div class="alert alert-success col-md-12">{{ success }}</div>
            </div>
            <div class="row justify-content-center" v-else-if="error">            
              <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>    
            </div>
            <div class="row">
              <div class="form-group col-md-4"><input class="form-control" id="category_name1" type="text" placeholder="Categoría..." v-model.trim="name" required></div>
              <div class="form-group col-md-6"><input class="form-control" id="category_description1" type="text" placeholder="Descripción..." v-model.trim="description" required></div>
              <div class="form-group col-md-2">
                <input type="hidden" v-model="id">    
                <button type="submit" class="btn btn-outline-primary"@click.prevent="update">Modificar</button>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-12">
                <button class="btn btn-outline-info" @click.prevent="triggerForm" value="-1">Nueva Categoría</button>
              </div>
            </div>            
          </form>
        </div>

    </div>

    <div class="row mt-4 corner4 div_trans8">
        <table id="table" class="table text-white m-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Extra</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="index">
              <td> {{ category.id }} </td>
              <td> {{ category.name }} </td>
              <td> {{ category.description }} </td>
              <td>
                <a href="" class="" @click="triggerForm" :value="category.id"><i class="fa fa-edit text-primary ml-1"></i></a>
                <a href="" class="" @click="remove" :value="category.id"><i class="fa fa-times text-danger ml-3"></i></a>
              </td>
            </tr>
          </tbody>
        </table>      
    </div> 
<!--
  <div class="__row __full-height-perc">
    <div id="form-container" class="__col __col-3 __align-self-center">
      <div class="__card" v-if="loading">
        <header class="__form-header">
          <h2 class="__title">Categoria</h2>
        </header>
        <div class="__form-body">
          <div class="__loading-container __text-center">
            <i class="fas fa-spinner fa-spin"></i> Loading
          </div>
        </div>
      </div>
      <div v-else>
        <form action="" class="__card" v-if="form == 'create'">
          <header class="__form-header">
            <h2 class="__title text-white">Categoria</h2>
            <p class="__description text-light">Agrega una nueva categoría</p>
          </header>
          <div class="__form-body text-light">
            <div class="__form-group text-light">
              <label for="category_name">Nombre: </label>
              <input id="category_name1" type="text" required placeholder=" " v-model.trim="name">
            </div>
            <div class="__form-group">
              <label for="category_description">Descripción: </label>
              <textarea id="category_description1" required rows="4" placeholder=" " v-model.trim="description"></textarea>
            </div>
          </div>
          <footer class="__form-footer">
            <div class="__message __message-success __mb-1" v-if="success">
              {{ success }}
            </div>
            <div class="__message __message-danger __mb-1" v-else-if="error">
              {{ error }}
            </div>
            <div class="__form-group-buttons">
              <button class="__button __button-success" @click.prevent="creates">Agregar</button>
              <button class="__button __button-secondary" @click.prevent="cleans">Limpiar campos</button>
            </div>
          </footer>
        </form>

        <form action="" class="__card" v-else-if="form == 'update'">
          <header class="__form-header">
            <h2 class="__title">Categoria</h2>
            <p class="__description">Modifica una categoría existente</p>
          </header>
          <div class="__form-body">
            <div class="__form-group">
              <label for="category_id">ID: </label>
              <input id="category_id" type="number" required placeholder=" " v-model.number="id" disabled>
            </div>
            <div class="__form-group">
              <label for="category_name">Nombre: </label>
              <input id="category_name" type="text" required placeholder=" " v-model.trim="name">
            </div>
            <div class="__form-group">
              <label for="category_description">Descripción: </label>
              <textarea id="category_description" required rows="4" placeholder=" " v-model.trim="description"></textarea>
            </div>
          </div>
          <div class="__form-footer">
            <div class="__message __message-success __mb-1" v-if="success">
              {{ success }}
            </div>
            <div class="__message __message-danger __mb-1" v-else-if="error">
              {{ error }}
            </div>
            <div class="__form-group-buttons">
              <button class="__button __button-warning" @click.prevent="update">Modificar</button>
              <button class="__button __button-secondary" @click.prevent="clean">Limpiar campos</button>
            </div>
          </div>
          <div class="__form-footer __mt-1">
            <div class="__form-group-buttons">
              <button class="__button __button-success" @click.prevent="triggerForm" value="-1">Quiero crear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="__col __col-7">
      <div id="table-container" class="__card __max-full-height-perc">
        <table id="table" class="__table __full-width-perc __text-center __table-bordered __table-hoverrable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th colspan="2">Extra</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="index">
              <td> {{ category.id }} </td>
              <td> {{ category.name }} </td>
              <td> {{ category.description }} </td>
              <td>
                <button class="__button __button-warning __button-rounded fas fa-pencil-alt" @click="triggerForm" :value="category.id"></button>
              </td>
              <td>
                <button class="__button __button-danger __button-rounded fas fa-times" @click="remove" :value="category.id"></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th colspan="2">Extra</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
-->


  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'

export default {
  name: 'CategoryComponent',
  data() {
    return {
      id: 0,
      name: '',
      description: '',
      success: '',
      error: '',
      loading: false,
      form: 'create',
      categories: []
    }
  },
  methods: {
    create() {
      if ( this.name.trim() && this.description.trim() ) {
        const category = {
          name: this.name,
          description: this.description
        }

        CategoryService.create(category)
          .then(resolve => {
            this.success = "Se ha cargado Exitosamente"
          CategoryService.retrieveAll().then((response)=>{
              this.categories=response;
            }).catch((error)=>{
              console.log(error);
            });
            setTimeout(() => {
              this.success = undefined
            }, 2500)
            this.clean()
          })
          .catch(reject => {
            this.error = reject

            setTimeout(() => {
              this.error = undefined
            }, 2500)
          }) 
      } else {
        this.error = 'Llene todos los campos.'

        setTimeout(() => {
          this.error = undefined
        }, 2500)
      }
    },
    remove(e) { 
      const target = e.target
      target.disabled = true
      target.classList.remove('fa-times')
      target.classList.add('fa-sync')
      target.classList.add('fa-spin')

      CategoryService.remove(target.value)
        .then(resolve => {
          target.classList.remove('fa-sync')
          target.classList.remove('fa-spin')
          target.classList.add('fa-times')
          target.disabled = false
          CategoryService.retrieveAll().then((response)=>{
              this.categories=response;
            }).catch((error)=>{
              console.log(error);
            });
        })
    },
    update() {
      if ( this.id > 0 && this.name.trim() && this.description.trim() ) {
        const category = {
          id: this.id,
          name: this.name,
          description: this.description
        }

        CategoryService.update(category)
          .then(resolve => {
            this.success = "Update completo"
          CategoryService.retrieveAll().then((response)=>{
              this.categories=response;
            }).catch((error)=>{
              console.log(error);
            });
            setTimeout(() => {
              this.success = undefined
            }, 2500)
          })
          .catch(reject => {
            this.error = reject

            setTimeout(() => {
              this.error = undefined
            }, 2500)
          }) 
      } else {
        this.error = 'Llene todos los campos.'

        setTimeout(() => {
          this.error = undefined
        }, 2500)

      }
      this.clean();
      this.id='';
      
    },
    triggerForm(e) {
      const target = e.target

      if (target.value == -1) {
        this.loading = true
        this.form = 'create'
        this.clean()
        this.loading = false

      } else {
        target.disabled = true
        target.classList.remove('fa-edit')
        target.classList.add('fa-sync')
        target.classList.add('fa-spin')

        CategoryService.retrieve(target.value)
          .then(resolve => {
            this.id = resolve.id
            this.name = resolve.name
            this.description = resolve.description
            
            target.classList.remove('fa-sync')
            target.classList.remove('fa-spin')
            target.classList.add('fa-edit')
            target.disabled = false

            this.form = 'update'
            this.loading = false
          })
      }
    },
    clean() {
      this.name = ''
      this.description = ''
    },
  },
  created() {
   CategoryService.retrieveAll().then((response)=>{
     console.log(response);
      this.categories =response;
   })
   .catch((error)=>{
     console.log(error);
   });
      
       
    
  },
  mounted() {
    const table_container = document.getElementById('table-container'),
      table = document.getElementById('table'),
      table_container_height = table_container.clientHeight,
      table_height = table.clientHeight
      
    if (table_container_height <= table_height) {
      table_container.parentElement.classList.remove('__align-self-center')
      table_container.classList.add('__overflow-scroll-y')
    } else {
      table_container.parentElement.classList.add('__align-self-center')
      table_container.classList.remove('__overflow-scroll-y')
    }
  }
}
</script>

