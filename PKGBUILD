# Maintainer: Martynas Janu <martynas.janu at googlemail dot com>
# Contributor: Benjamin Asbach <archlinux-aur.pkgname@impl.it>
pkgname=apache-netbeans
pkgver=11.2
pkgrel=10
pkgdesc="Apache Netbeans IDE development platform"
arch=('i686' 'x86_64')
url="https://netbeans.apache.org"
license=('Apache')
options=('!strip')
depends=('java-runtime>=8')
provides=('apache-netbeans')
conflicts=('apache-netbeans')
source=("https://www-eu.apache.org/dist/netbeans/netbeans/11.2/netbeans-11.2-bin.zip"
        "apache-netbeans.desktop")
sha512sums=("d589481808832c4f0391ee1ecb8e18202cebeee8bd844cb4bdbf6125113b41f9138a34c4c2ef1fdf228294ef8c24b242ffec9ba5fdc4f1d288db4a3f19ba1509"
            "22eeb1d5af22af6aa88551ea8c8e8a751fe0ed9bc204b3ea79ae1c524c6655ff00e2439f8c62d64187547e5d535512cff43eb6a0a565a7c778fb41a63b34f5e0")

package() {
    mkdir -p $pkgdir/usr/share/apache-netbeans
    mv $srcdir/netbeans $srcdir/apache-netbeans
    cp -R $srcdir/apache-netbeans $pkgdir/usr/share
    chmod -R 0755 $pkgdir/usr/share/apache-netbeans
    chmod +x $pkgdir/usr/share/apache-netbeans/bin/netbeans
    rm -f $pkgdir/usr/share/apache-netbeans/bin/netbeans.exe
    rm -f $pkgdir/usr/share/apache-netbeans/bin/netbeans64.exe
    install -Dm755 apache-netbeans.desktop "${pkgdir}/usr/share/applications/apache-netbeans.desktop"
}
