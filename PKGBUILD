# Maintainer: copygirl <copygirl@mcft.net>
_pkgname=mindustry
pkgname=$_pkgname-git
pkgver=r5344.ff2d9c34f
pkgrel=1
pkgdesc="A sandbox tower defense game written in Java"
arch=("any")
url="https://github.com/Anuken/Mindustry"
license=("MIT")
provides=("$_pkgname")
conflicts=("$_pkgname")
depends=("java-runtime=8")
makedepends=("git" "java-environment=8")
source=("$_pkgname::git://github.com/Anuken/Mindustry.git"
        "mindustry.desktop"
        "mindustry.png"
        "mindustry.sh")
md5sums=("SKIP"
         "5cbcd7783b438452f494b34799dbea65"
         "87e1a2c19d319f1eaef6c1a2920672d2"
         "3c3fd3a7851992656c45feaf1ccdc4ca")

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
	./gradlew desktop:dist
}

package() {
	install -Dm755 "$_pkgname".sh "$pkgdir"/usr/bin/"$_pkgname"
	install -Dm644 "$_pkgname".png "$pkgdir"/usr/share/pixmaps/"$_pkgname".png
	install -Dm644 "$_pkgname".desktop "$pkgdir"/usr/share/applications/"$_pkgname".desktop
	install -Dm755 "$_pkgname"/desktop/build/libs/Mindustry.jar "$pkgdir"/usr/share/java/"$_pkgname"/Mindustry.jar
}
