# Maintainer: steadfasterX <steadfasterX [at] binbash -dot- rocks>
pkgname=easy-installer
pkgver=0.11.1
pkgrel=3
pkgdesc="The Easy Installer is a desktop application which helps users install Android /e/ (https://doc.e.foundation/what-s-e) on supported devices."
arch=('x86_64')
url="https://gitlab.e.foundation/e/tools/${pkgname}"
license=('GPL3')
depends=()
# required java version
_reqjava=11
makedepends=('git' 'gradle' "java-environment-openjdk=${_reqjava}" 'java-runtime-common' 'ruby-ronn')
optdepends=()
backup=()
source=("${pkgname}-${pkgver}::git+https://gitlab.e.foundation/e/tools/${pkgname}.git#tag=v${pkgver}-beta"
        "$pkgname-$pkgver.patch"
        "${pkgname}.8.md")
md5sums=('SKIP'
         'd6b12a412e1cbeba347727a84851c8d8'
         'bc6e92b53daabcee25e57904b3eb1bb6')
BINFIX=usr/local/bin
MANDIR=usr/share/man
MAN8DIR=${MANDIR}/man8
MAN8PAGE=${pkgname}.8

prepare(){
    cd "$pkgname-$pkgver"
    patch -p1 < "$srcdir/$pkgname-$pkgver.patch"
}
build(){
    cd "$pkgname-$pkgver"
    export LC_ALL=C
    export JAVA_HOME="/usr/lib/jvm/java-${_reqjava}-openjdk"
    [ ! -d $JAVA_HOME ] && echo "ERROR: $JAVA_HOME does not exist" && exit 3
    ./gradlew dist
}
package(){
    install -d -m 755 $pkgdir/opt/
    install -d -m 755 $pkgdir/usr/local/bin
    install -d -m 755 $pkgdir/usr/share/applications
    install -d -m 755 $pkgdir/${MAN8DIR}
    
    cp -a $pkgname-$pkgver/build/image/easy-installer-linux-x64 $pkgdir/opt/${pkgname}
    cat > $pkgdir/$BINFIX/${pkgname} << _EOB
#!/bin/bash

cd /opt/${pkgname}/bin
./easy-installer
_EOB
    chmod 755 $pkgdir/$BINFIX/${pkgname}

    cat > $pkgdir/usr/share/applications/e.foundation.${pkgname}.desktop << _EOD
[Desktop Entry]
Name=Easy Installer for /e/
Exec=${pkgname}
Icon=/opt/${pkgname}/${pkgname}.png
Terminal=false
Type=Application
StartupNotify=false
_EOD
    chmod 755 $pkgdir/usr/share/applications/e.foundation.${pkgname}.desktop

    install -D -m644 $pkgname-$pkgver/snap/gui/${pkgname}.png $pkgdir/opt/${pkgname}/
    install -D -m644 $pkgname-$pkgver/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    ronn -r --pipe ../${MAN8PAGE}.md > $pkgdir/${MAN8DIR}/${MAN8PAGE}
}
