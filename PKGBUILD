# Contributor: Adria Arrufat <swiftscythe@gmail.com>
 pkgname=latextogrob
 pkgver=0.2
 pkgrel=1
 pkgdesc="A simple script to convert a file with LaTeX formulae into a readable file with HP 50g"
 arch=('any')
 url=("https://bbs.archlinux.org/viewtopic.php?id=117953")
 license=("GPL")
 depends=('mathtex' 'imagemagick' 'pgmtogrob')
 source=('latextogrob')
 md5sums=('0c4f966caae11a58387b836814760070')

 build() {
   cd $srcdir/
   install -D -m755 $pkgname $pkgdir/usr/bin/$pkgname || return 1
   }
