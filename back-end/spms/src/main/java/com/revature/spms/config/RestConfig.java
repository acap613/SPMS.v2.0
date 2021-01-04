package com.revature.spms.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.revature.spms.entity.Test;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class RestConfig {

	private EntityManager entityManager;

    @Autowired
    public RestConfig(EntityManager entityManager){
        this.entityManager = entityManager;
    }

   
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

        HttpMethod[] theUnsupportedActions = {HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PUT};

        // Disable HTTP methods for Products: PUT, POST, DELETE
        config.getExposureConfiguration()
                .forDomainType(Test.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // Disable HTTP methods for ProductCategory: PUT, POST, DELETE
       /* config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
		*/
        // call internal helper method to help expose IDs
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        //expose entity Ids...

        // First, get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = this.entityManager.getMetamodel().getEntities();

        // create an array of the entity types...
        List<Class> entityClasses = new ArrayList<>();

        // -get the entity types for the entities
        for(EntityType entityType: entities) {
            entityClasses.add(entityType.getJavaType());
        }

        // expose entity ID for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);

    }

}
