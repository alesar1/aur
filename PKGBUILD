# Maintainer: Musikolo <musikolo {at} hotmail [dot] com>
# Contributor: Infernio <infernio at icloud dot com>
# Contributor: BluePeril <blueperil (at) blueperil _dot_ de>

pkgbase="lombok"
pkgname=('lombok-common' 'lombok-eclipse-java' 'lombok-eclipse-jee' 'lombok-spring-tool-suite')
pkgver=1.18.22
pkgrel=1
pkgdesc="Project Lombok integrated with several Eclipse-based installations"
makedepends=('java-runtime')
arch=("any")
url="https://projectlombok.org"
license=('MIT')
source=("https://projectlombok.org/downloads/lombok-${pkgver}.jar")
sha256sums=('ecef1581411d7a82cc04281667ee0bac5d7c0a5aae74cfc38430396c91c31831')
noextract=("lombok.jar")

build() {
    java -jar lombok-$pkgver.jar publicApi
}

package_lombok-common() {
    replaces=('lombok-eclipse')
    conflicts=('lombok-eclipse')
    install -Dm644 lombok-$pkgver.jar "${pkgdir}"/usr/lib/$pkgname/lombok.jar
    install -Dm644 lombok-api.jar "${pkgdir}"/usr/lib/$pkgname/lombok-api.jar
    install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/$pkgname/LICENSE
}

package_lombok-eclipse-java() {
    pkgdesc="Lombok integration with Eclipse IDE for Java Developers"
    depends=(lombok-common=$pkgver-$pkgrel 'eclipse-java')
    install=lombok-eclipse.install
}

package_lombok-eclipse-jee() {
    pkgdesc="Lombok integration with Eclipse IDE for Java EE Developers"
    depends=(lombok-common=$pkgver-$pkgrel 'eclipse-jee')
    install=lombok-eclipse.install
}

package_lombok-spring-tool-suite() {
    pkgdesc="Lombok integration with Spring Tool Suite (STS)"
    depends=(lombok-common=$pkgver-$pkgrel 'spring-tool-suite')
    install=lombok-sts.install
}
