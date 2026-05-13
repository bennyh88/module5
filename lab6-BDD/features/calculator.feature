Feature: various scenarios to test the calculator

Scenario: add two numbers
    Given a calculator
    When I add 2 and 9
    Then the outcome should be 11

Scenario: subtract two numbers
    Given a calculator
    When I subtract 2 from 9
    Then the outcome should be 7

Scenario: multiply two numbers
    Given a calculator
    When I multiply 2 and 9
    Then the outcome should be 18