// @generated by protobuf-ts 2.2.2 with parameter long_type_string
// @generated from protobuf file "products/v1/service.proto" (package "products.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Sort } from "../../common/v1/sort";
import { Search } from "../../common/v1/search";
import { Pagination } from "../../common/v1/search";
import { Product } from "./product";
/**
 * @generated from protobuf message products.v1.CreateProductRequest
 */
export interface CreateProductRequest {
    /**
     * Name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Description
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * Image ID
     *
     * @generated from protobuf field: optional string image_id = 3;
     */
    imageId?: string;
    /**
     * Price
     *
     * @generated from protobuf field: uint64 price = 4;
     */
    price: string;
    /**
     * Prince Currency
     *
     * @generated from protobuf field: uint32 currency_id = 5;
     */
    currencyId: number;
    /**
     * Rating
     *
     * @generated from protobuf field: uint32 rating = 6;
     */
    rating: number;
    /**
     * Category ID
     *
     * @generated from protobuf field: uint32 category_id = 7;
     */
    categoryId: number;
    /**
     * Specification
     *
     * @generated from protobuf field: string specification = 8;
     */
    specification: string;
}
/**
 * @generated from protobuf message products.v1.CreateProductResponse
 */
export interface CreateProductResponse {
    /**
     * @generated from protobuf field: products.v1.Product product = 1;
     */
    product?: Product;
}
/**
 * @generated from protobuf message products.v1.AllProductsRequest
 */
export interface AllProductsRequest {
    /**
     * @generated from protobuf field: common.v1.Pagination pagination = 1;
     */
    pagination?: Pagination;
    /**
     * @generated from protobuf field: common.v1.Search search = 2;
     */
    search?: Search;
    /**
     * @generated from protobuf field: common.v1.Sort sort = 3;
     */
    sort?: Sort;
}
/**
 * @generated from protobuf message products.v1.AllProductsResponse
 */
export interface AllProductsResponse {
    /**
     * @generated from protobuf field: repeated products.v1.Product products = 1;
     */
    products: Product[];
}
/**
 * @generated from protobuf message products.v1.ProductByIDRequest
 */
export interface ProductByIDRequest {
    /**
     * ID
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message products.v1.ProductByIDResponse
 */
export interface ProductByIDResponse {
    /**
     * @generated from protobuf field: products.v1.Product product = 1;
     */
    product?: Product;
}
/**
 * @generated from protobuf message products.v1.UpdateProductRequest
 */
export interface UpdateProductRequest {
    /**
     * ID
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * Name
     *
     * @generated from protobuf field: optional string name = 2;
     */
    name?: string;
    /**
     * Description
     *
     * @generated from protobuf field: optional string description = 3;
     */
    description?: string;
    /**
     * Image ID
     *
     * @generated from protobuf field: optional string image_id = 4;
     */
    imageId?: string;
    /**
     * Price
     *
     * @generated from protobuf field: optional uint64 price = 5;
     */
    price?: string;
    /**
     * Prince Currency
     *
     * @generated from protobuf field: optional uint32 currency_id = 6;
     */
    currencyId?: number;
    /**
     * Rating
     *
     * @generated from protobuf field: optional uint32 rating = 7;
     */
    rating?: number;
    /**
     * Category ID
     *
     * @generated from protobuf field: optional uint32 category_id = 8;
     */
    categoryId?: number;
    /**
     * Specification
     *
     * @generated from protobuf field: optional string specification = 9;
     */
    specification?: string;
}
/**
 * @generated from protobuf message products.v1.UpdateProductResponse
 */
export interface UpdateProductResponse {
}
/**
 * @generated from protobuf message products.v1.DeleteProductRequest
 */
export interface DeleteProductRequest {
    /**
     * ID
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message products.v1.DeleteProductResponse
 */
export interface DeleteProductResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateProductRequest$Type extends MessageType<CreateProductRequest> {
    constructor() {
        super("products.v1.CreateProductRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "image_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "currency_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "rating", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "category_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "specification", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateProductRequest>): CreateProductRequest {
        const message = { name: "", description: "", price: "0", currencyId: 0, rating: 0, categoryId: 0, specification: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateProductRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateProductRequest): CreateProductRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* optional string image_id */ 3:
                    message.imageId = reader.string();
                    break;
                case /* uint64 price */ 4:
                    message.price = reader.uint64().toString();
                    break;
                case /* uint32 currency_id */ 5:
                    message.currencyId = reader.uint32();
                    break;
                case /* uint32 rating */ 6:
                    message.rating = reader.uint32();
                    break;
                case /* uint32 category_id */ 7:
                    message.categoryId = reader.uint32();
                    break;
                case /* string specification */ 8:
                    message.specification = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateProductRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* optional string image_id = 3; */
        if (message.imageId !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.imageId);
        /* uint64 price = 4; */
        if (message.price !== "0")
            writer.tag(4, WireType.Varint).uint64(message.price);
        /* uint32 currency_id = 5; */
        if (message.currencyId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.currencyId);
        /* uint32 rating = 6; */
        if (message.rating !== 0)
            writer.tag(6, WireType.Varint).uint32(message.rating);
        /* uint32 category_id = 7; */
        if (message.categoryId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.categoryId);
        /* string specification = 8; */
        if (message.specification !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.specification);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.CreateProductRequest
 */
export const CreateProductRequest = new CreateProductRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateProductResponse$Type extends MessageType<CreateProductResponse> {
    constructor() {
        super("products.v1.CreateProductResponse", [
            { no: 1, name: "product", kind: "message", T: () => Product }
        ]);
    }
    create(value?: PartialMessage<CreateProductResponse>): CreateProductResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateProductResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateProductResponse): CreateProductResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* products.v1.Product product */ 1:
                    message.product = Product.internalBinaryRead(reader, reader.uint32(), options, message.product);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* products.v1.Product product = 1; */
        if (message.product)
            Product.internalBinaryWrite(message.product, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.CreateProductResponse
 */
export const CreateProductResponse = new CreateProductResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllProductsRequest$Type extends MessageType<AllProductsRequest> {
    constructor() {
        super("products.v1.AllProductsRequest", [
            { no: 1, name: "pagination", kind: "message", T: () => Pagination },
            { no: 2, name: "search", kind: "message", T: () => Search },
            { no: 3, name: "sort", kind: "message", T: () => Sort }
        ]);
    }
    create(value?: PartialMessage<AllProductsRequest>): AllProductsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AllProductsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AllProductsRequest): AllProductsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* common.v1.Pagination pagination */ 1:
                    message.pagination = Pagination.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
                    break;
                case /* common.v1.Search search */ 2:
                    message.search = Search.internalBinaryRead(reader, reader.uint32(), options, message.search);
                    break;
                case /* common.v1.Sort sort */ 3:
                    message.sort = Sort.internalBinaryRead(reader, reader.uint32(), options, message.sort);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AllProductsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* common.v1.Pagination pagination = 1; */
        if (message.pagination)
            Pagination.internalBinaryWrite(message.pagination, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* common.v1.Search search = 2; */
        if (message.search)
            Search.internalBinaryWrite(message.search, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* common.v1.Sort sort = 3; */
        if (message.sort)
            Sort.internalBinaryWrite(message.sort, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.AllProductsRequest
 */
export const AllProductsRequest = new AllProductsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllProductsResponse$Type extends MessageType<AllProductsResponse> {
    constructor() {
        super("products.v1.AllProductsResponse", [
            { no: 1, name: "products", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Product }
        ]);
    }
    create(value?: PartialMessage<AllProductsResponse>): AllProductsResponse {
        const message = { products: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AllProductsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AllProductsResponse): AllProductsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated products.v1.Product products */ 1:
                    message.products.push(Product.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AllProductsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated products.v1.Product products = 1; */
        for (let i = 0; i < message.products.length; i++)
            Product.internalBinaryWrite(message.products[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.AllProductsResponse
 */
export const AllProductsResponse = new AllProductsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProductByIDRequest$Type extends MessageType<ProductByIDRequest> {
    constructor() {
        super("products.v1.ProductByIDRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ProductByIDRequest>): ProductByIDRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProductByIDRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductByIDRequest): ProductByIDRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProductByIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.ProductByIDRequest
 */
export const ProductByIDRequest = new ProductByIDRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProductByIDResponse$Type extends MessageType<ProductByIDResponse> {
    constructor() {
        super("products.v1.ProductByIDResponse", [
            { no: 1, name: "product", kind: "message", T: () => Product }
        ]);
    }
    create(value?: PartialMessage<ProductByIDResponse>): ProductByIDResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProductByIDResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProductByIDResponse): ProductByIDResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* products.v1.Product product */ 1:
                    message.product = Product.internalBinaryRead(reader, reader.uint32(), options, message.product);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProductByIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* products.v1.Product product = 1; */
        if (message.product)
            Product.internalBinaryWrite(message.product, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.ProductByIDResponse
 */
export const ProductByIDResponse = new ProductByIDResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateProductRequest$Type extends MessageType<UpdateProductRequest> {
    constructor() {
        super("products.v1.UpdateProductRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "image_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "price", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/ },
            { no: 6, name: "currency_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "rating", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "category_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "specification", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateProductRequest>): UpdateProductRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateProductRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateProductRequest): UpdateProductRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* optional string name */ 2:
                    message.name = reader.string();
                    break;
                case /* optional string description */ 3:
                    message.description = reader.string();
                    break;
                case /* optional string image_id */ 4:
                    message.imageId = reader.string();
                    break;
                case /* optional uint64 price */ 5:
                    message.price = reader.uint64().toString();
                    break;
                case /* optional uint32 currency_id */ 6:
                    message.currencyId = reader.uint32();
                    break;
                case /* optional uint32 rating */ 7:
                    message.rating = reader.uint32();
                    break;
                case /* optional uint32 category_id */ 8:
                    message.categoryId = reader.uint32();
                    break;
                case /* optional string specification */ 9:
                    message.specification = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateProductRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* optional string name = 2; */
        if (message.name !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* optional string description = 3; */
        if (message.description !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* optional string image_id = 4; */
        if (message.imageId !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.imageId);
        /* optional uint64 price = 5; */
        if (message.price !== undefined)
            writer.tag(5, WireType.Varint).uint64(message.price);
        /* optional uint32 currency_id = 6; */
        if (message.currencyId !== undefined)
            writer.tag(6, WireType.Varint).uint32(message.currencyId);
        /* optional uint32 rating = 7; */
        if (message.rating !== undefined)
            writer.tag(7, WireType.Varint).uint32(message.rating);
        /* optional uint32 category_id = 8; */
        if (message.categoryId !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.categoryId);
        /* optional string specification = 9; */
        if (message.specification !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.specification);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.UpdateProductRequest
 */
export const UpdateProductRequest = new UpdateProductRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateProductResponse$Type extends MessageType<UpdateProductResponse> {
    constructor() {
        super("products.v1.UpdateProductResponse", []);
    }
    create(value?: PartialMessage<UpdateProductResponse>): UpdateProductResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateProductResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateProductResponse): UpdateProductResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UpdateProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.UpdateProductResponse
 */
export const UpdateProductResponse = new UpdateProductResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteProductRequest$Type extends MessageType<DeleteProductRequest> {
    constructor() {
        super("products.v1.DeleteProductRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteProductRequest>): DeleteProductRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteProductRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteProductRequest): DeleteProductRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteProductRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.DeleteProductRequest
 */
export const DeleteProductRequest = new DeleteProductRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteProductResponse$Type extends MessageType<DeleteProductResponse> {
    constructor() {
        super("products.v1.DeleteProductResponse", []);
    }
    create(value?: PartialMessage<DeleteProductResponse>): DeleteProductResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteProductResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteProductResponse): DeleteProductResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DeleteProductResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message products.v1.DeleteProductResponse
 */
export const DeleteProductResponse = new DeleteProductResponse$Type();
/**
 * @generated ServiceType for protobuf service products.v1.ProductService
 */
export const ProductService = new ServiceType("products.v1.ProductService", [
    { name: "AllProducts", options: {}, I: AllProductsRequest, O: AllProductsResponse },
    { name: "ProductByID", options: {}, I: ProductByIDRequest, O: ProductByIDResponse },
    { name: "CreateProduct", options: {}, I: CreateProductRequest, O: CreateProductResponse },
    { name: "UpdateProduct", options: {}, I: UpdateProductRequest, O: UpdateProductResponse },
    { name: "DeleteProduct", options: {}, I: DeleteProductRequest, O: DeleteProductResponse }
]);
