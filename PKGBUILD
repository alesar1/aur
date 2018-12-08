# Maintainer: ZJLIN <zjin841126@gmail.com>
pkgname=trimmomatic
pkgver=0.38
pkgrel=1
pkgdesc='Trimmomatic: A flexible read trimming tool for Illumina NGS data'
arch=('any')
url="http://www.usadellab.org/cms/?page=trimmomatic"
license=('GPL3')
depends=('java-environment>=6')
source=("http://www.usadellab.org/cms/uploads/supplementary/Trimmomatic/Trimmomatic-$pkgver.zip"
        "trimmomatic"
        )
md5sums=('4b3df3caf7fe803ca54c79db1a99c464'
         '4841ad7904e222538c4469cf0e6c2b22')

package() {
    mkdir $pkgdir/opt/
    mv $srcdir/Trimmomatic-$pkgver $srcdir/Trimmomatic
    cp -r $srcdir/Trimmomatic/ $pkgdir/opt/

    mkdir -p "${pkgdir}/usr/bin/"
    install $srcdir/trimmomatic $pkgdir/usr/bin
}
