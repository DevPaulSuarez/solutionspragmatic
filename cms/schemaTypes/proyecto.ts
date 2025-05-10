import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Proyecto',
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      title: 'Título',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'en', type: 'string', title: 'Inglés' },
      ]
    }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Descripción',
      fields: [
        { name: 'es', type: 'text', title: 'Español' },
        { name: 'en', type: 'text', title: 'Inglés' },
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagen del Proyecto',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tecnologías',
    }),
  ]
});
