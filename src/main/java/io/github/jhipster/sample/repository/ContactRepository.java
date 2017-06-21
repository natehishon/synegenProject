package io.github.jhipster.sample.repository;

import io.github.jhipster.sample.domain.Contact;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the Contact entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {

    @Query("select contact from Contact contact where contact.user.login = ?#{principal.username}")
    List<Contact> findByUserIsCurrentUser();
    
}
