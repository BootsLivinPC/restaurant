# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to

ActiveRecord::Schema.define(version: 2019_06_10_231333) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "price"
    t.bigint "menu_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_id"], name: "index_items_on_menu_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string "title"
    t.bigint "bar_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_menus_on_bar_id"
  end

  add_foreign_key "items", "menus"
  add_foreign_key "menus", "bars"
end
