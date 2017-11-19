# Maintainer: Jean-Baptiste Delisle <jb dot delisle at aliceadsl dot fr>
pkgname=bed-latex
pkgver=1.3.1
pkgrel=1
pkgdesc="BEd: Beamer Editor, GUI for LaTeX Beamer presentations."
arch=(any)
url="https://framagit.org/delisle/bed"
license=('GPL3')
depends=('python>=3.0' 'python-pyqt5' 'python-poppler-qt5' 'texlive-core' 'texlive-latexextra')
optdepends=('python-pygments')
makedepends=()
conflicts=('bed')
install="bed.install"
source=("bed-$pkgver.tar.gz::https://framagit.org/delisle/bed/repository/archive.tar.gz?ref=v$pkgver")
md5sums=('9e5b0a56e75f156fbbe95956abee852a')
tag=72a603bd9eecf8cf763c58f13ea7f09a48b0f04f

prepare() {
  cd bed-v$pkgver-$tag
  sed -i -e "s#/tmp/python3#/usr/bin/python3#" python/bed.py
  sed -i -e "s#/tmp/pdflatex#pdflatex#" python/settings.py
  sed -i 's#/local##g' launcher/bed.desktop
}

package(){
    mkdir -p $pkgdir/usr/bin
    mkdir -p $pkgdir/usr/share/bed
    mkdir -p $pkgdir/usr/share/texmf/tex/latex/bed
    mkdir -p $pkgdir/usr/share/applications
    mkdir -p $pkgdir/usr/share/pixmaps

    cd bed-v$pkgver-$tag
    cp python/*.py $pkgdir/usr/share/bed
    chmod +x $pkgdir/usr/share/bed/bed.py
    cp icons/* $pkgdir/usr/share/bed
    cp translation/*.qm $pkgdir/usr/share/bed
    cp launcher/bed.desktop $pkgdir/usr/share/applications/
    cp latex/bed.sty $pkgdir/usr/share/texmf/tex/latex/bed/
    cd $pkgdir/usr/bin/
    ln -s ../share/bed/bed.py bed
    cd $pkgdir/usr/share/pixmaps
    ln -s ../bed/bed.svg bed.svg
}
