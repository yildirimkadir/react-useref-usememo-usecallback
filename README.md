# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Definitionen

!!! useCallBack: Gibt einen memoisierten Callback zurück.Übergib ein Inline-Callback und ein Array von Abhängigkeiten. useCallback wird eine memoisierte Version des Callbacks zurückgeben, die sich nur dann ändert, wenn sich eine der Abhängigkeiten geändert hat. Das ist nützlich, um Callbacks an optimierte Kindkomponenten zu übergeben, die sich auf gleichbleibende Referenzen verlassen, um unnötigem Rendern vorzubeugen.

!! useRef: useRef gibt ein veränderbares ref-Objekt zurück, dessen Eigenschaft .current mit dem übergebenen Argument (initialValue) initialisiert wird. Das zurückgegebene Objekt bleibt während der gesamten Lebensdauer der Komponente bestehen.

!! useMemo: Gibt einen memoisierten Wert zurück.
Übergib eine “create”-Funktion und ein Array von Abhängigkeiten. useMemo wird den memoisierten Wert nur dann neu berechnen, wenn sich eine der Abhängigkeiten geändert hat. Diese Optimierung hilft dabei, aufwendige Berechnungen bei jedem Rendern zu vermeiden.
