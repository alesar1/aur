# Maintainer: aksr <aksr at t-com dot me>
pkgname=neatroff-suite-git
pkgver=0.r431.eed37cb
pkgrel=1
epoch=
pkgdesc="A complete neatroff typesetting system (neatmkfn, neatroff, neatpost, neateqn and neatrefer)."
arch=('i686' 'x86_64')
url="http://litcave.rudi.ir/"
license=('custom:BSD')
groups=()
depends=('gsfonts')
makedepends=('git')
optdepends=('troff-git: The preprocessors and the macro packages can be used with neatroff'
            'bib2ref: converts bibtex files to refer databases'
            'ref2bib: converts refer databases to bibtex files'
            'nref: manages document references, it can be used as a troff preprocessor'
            'shape: A farsi/arabic shaping preprocessor for troff')
checkdepends=()
provides=('neatmkfn' 'neatroff' 'neatpost' 'neateqn' 'neatrefer')
conflicts=('neatroff' 'neatroff-git' 'neatmkfn' 'neatmkfn-git' 
           'neatpost' 'neatpost-git' 'neateqn' 'neateqn-git'
           'neatrefer' 'neatrefer-git')
replaces=('mktrfn')
backup=()
options=()
changelog=
install=
source=("neatmkfn::git://repo.or.cz/neatmkfn.git"
        "neatroff::git+git://repo.or.cz/neatroff.git"
        "neatroff_dir::git+git://repo.or.cz/neatroff.git#branch=dir"
        "neatroff_make::git://repo.or.cz/neatroff_make.git"
        "neatpost::git://repo.or.cz/neatpost.git"
        "neateqn::git://repo.or.cz/neateqn.git"
        "neatrefer::git://repo.or.cz/neatrefer.git"
        "http://litcave.rudi.ir/neatroff.pdf"
        "http://litcave.rudi.ir/neateqn.pdf")
noextract=()
md5sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP'
         '56e6abc4775a4b76ae4190cc5bae350b'
         '38ff8a13e7b1dbce1eb20f41139b8e16')
sha1sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP'
          'fcd3f9735f5b189b64f8a644df3bbbcf32486c06'
          '3e7b33efbdb3a9f944fc16d3e0f97ebd8aca697c')
sha256sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP'
            'efda96099607e73a5e46c590102f27f77a913e409731dc7c983327c98fea635b'
            '015589c6ceef39318d593dbc27cd19b307e536a2c18e4c44644e4d142ca92b9b')

## Ghostscript Fonts Location:
FP="/usr/share/fonts/Type1/"

## FONTS directory 
FDIR=/usr/share/neatroff/font

## MACROS directory
MDIR=/usr/share/neatroff/tmac

pkgver() {
  cd $srcdir/neatroff
  printf "0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/neatmkfn"
  make all
  mkdir fonts
  ./gen.sh $FP fonts
  sed -i 's|./mkfn|neatmkfn|g' gen.sh
  cd $srcdir/neatroff
  make all FDIR=$FDIR MDIR=$MDIR
  cd $srcdir/neatroff_dir
  make all FDIR=$FDIR MDIR=$MDIR
  cd $srcdir/neatpost
  make all FDIR=$FDIR
  cd $srcdir/neateqn
  make all
  cd $srcdir/neatrefer
  make all
}

package() {
  cd $srcdir/neatmkfn
  install -Dm755 mkfn $pkgdir/usr/bin/neatmkfn
  install -Dm644 gen.sh $pkgdir/usr/share/doc/${pkgname%-*}/gen.sh
  install -Dm644 README $pkgdir/usr/share/doc/${pkgname%-*}/README_neatmkfn
  mkdir -p $pkgdir/usr/share/${pkgname%-*}/font/devutf/
  cp fonts/* $pkgdir/usr/share/${pkgname%-*}/font/devutf/

  cd $srcdir/neatroff
  install -Dm755 roff $pkgdir/usr/bin/neatroff
  install -Dm644 README $pkgdir/usr/share/doc/${pkgname%-*}/README
  install -Dm644 ../neatroff.pdf $pkgdir/usr/share/doc/${pkgname%-*}/neatroff.pdf
  install -Dm644 ../neatroff_make/tmac/NOTICE $pkgdir/usr/share/licenses/${pkgname%-*}/NOTICE
  ## copy neatroff macros
  mkdir -p $pkgdir/usr/share/${pkgname%-*}/tmac/
  cp -r ../neatroff_make/tmac/* $pkgdir/usr/share/${pkgname%-*}/tmac/
  rm -f $pkgdir/usr/share/${pkgname%-*}/tmac/NOTICE
  cd $srcdir/neatroff_dir
  install -Dm755 roff $pkgdir/usr/bin/neatroff_dir

  cd $srcdir/neatpost
  install -Dm755 post $pkgdir/usr/bin/neatpost

  cd $srcdir/neateqn
  install -Dm755 eqn $pkgdir/usr/bin/neateqn
  install -Dm644 README $pkgdir/usr/share/doc/${pkgname%-*}/README_neateqn
  install -Dm644 ../neateqn.pdf $pkgdir/usr/share/doc/${pkgname%-*}/neateqn.pdf

  cd $srcdir/neatrefer
  install -Dm755 refer $pkgdir/usr/bin/neatrefer
  install -Dm644 README $pkgdir/usr/share/doc/${pkgname%-*}/README_neatrefer
}

