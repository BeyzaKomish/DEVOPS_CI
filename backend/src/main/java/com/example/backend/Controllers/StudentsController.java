package com.example.backend.Controllers;


import com.example.backend.Models.Students;
import com.example.backend.Repository.StudentsRepository;
//import net.sf.jasperreports.engine.*;
//import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/student")
public class StudentsController {

    @Autowired
    private StudentsRepository studentsRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Students>> getAllStudents() {
        List<Students> students = studentsRepository.findAll();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Students> addStudent(@RequestBody Students student) {
        return new ResponseEntity<>(studentsRepository.save(student), HttpStatus.CREATED);
    }
//
//    @GetMapping("/pdf")
//        public ResponseEntity<Void> generateStudentsPdf() throws FileNotFoundException, JRException {
//            List<Students> students = studentsRepository.findAll();
//        String path = "C:\\Users\\Leen Husseini\\OneDrive\\Desktop";
//        File file = ResourceUtils.getFile("classpath:report/students2.jrxml");
//
//        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
//        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(students);
//        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, null, dataSource);
//        JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\students_report.pdf");
//        String outputFile = path + "\\students_report.pdf";
//        System.out.println("PDF generated at: " + outputFile);
//        try {
//            JasperExportManager.exportReportToPdfFile(jasperPrint, outputFile);
//        } catch (Exception e) {
//            System.out.println("PDF export failed: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//
//        return new ResponseEntity<>(HttpStatus.OK);
//        }



}
