<template>
  <v-row align="center" class="py-5">
    <!-- Spacer to match lock icon -->
    <v-col cols="1" />
    <!-- Content -->
    <v-col cols="11">
      <v-row align="center" class="py-5">
        <!-- Selected avatar -->
        <v-col cols="auto" v-if="imgURL">
          <img
            :src="imgURL"
            alt="Avatar"
            style="height: 120px; object-fit: fill"
          />
        </v-col>
        <!-- Delete button and image picker -->
        <v-col>
          <v-row class="flex-column" justify="center">
            <v-col v-if="imgURL"
              ><v-btn
                small
                depressed
                color="error"
                class="pa-4"
                style="min-width: 0"
                @click="removeImage"
                >X</v-btn
              ></v-col
            >
            <v-col
              ><input
                type="file"
                ref="fileupload"
                accept="image/*"
                @change="uploadImage($event)"
                id="file-input"
            /></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      imgURL: null,
    };
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      if (file) this.imgURL = URL.createObjectURL(file);
    },
    removeImage() {
      this.imgURL = null;
      this.$refs.fileupload.value = null; // remove from picker too
    },
  },
};
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}
</style>