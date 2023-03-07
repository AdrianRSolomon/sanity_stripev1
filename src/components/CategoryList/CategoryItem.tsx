import Link from "next/link";
import Image from "next/image";
import { CategorySchema } from "lib/interfaces";
import styles from "styles/components/CategoryList/CategoryItem.module.scss";
import urlFor from "lib/sanity/urlFor";

interface CategoryItemProps {
  category: CategorySchema;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { featured_image, slug, title, description } = category;
  return (
        <div className={styles.categoryItem}>
          <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <a href={`/category/${slug}`}>
                <div className="flex flex-col md:flex-row items-strech justify-between py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <p className="text-base lg:text-xl mt-2">
                        {title}
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                    <Image
                      src={urlFor(featured_image).url()}
                      alt={title}
                      quality={100}
                      layout="fill"
                      className="clickable-img"
                    />
                    </div>
                </div>
                <div className="bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">{title}</h1>
                        <p className="text-base lg:text-xl text-gray-800">
                        {description && <span className="text-xs">{description}</span>}
                        </p>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </div>
  );
};

export default CategoryItem;
