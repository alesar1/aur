# Maintainer: Andreas Hauser <andy-aur@splashground.de>
# Former Maintainer: Christoph Drexler <chrdr at gmx dot at>

pkgname=openfst
pkgver=1.5.1
pkgrel=1
pkgdesc="Library for constructing, combining, optimizing, and searching weighted finite-state transducers (FSTs)"
arch=('i686' 'x86_64')
url="http://www.openfst.org/"
license=('APACHE')
depends=('gcc-libs' 'glibc' 'python2')
options=(!libtool)
source=("http://openfst.cs.nyu.edu/twiki/pub/FST/FstDownload/${pkgname}-${pkgver}.tar.gz")
sha256sums=('d40724bc5641091063db632392e6561e9077d5e0d88ac106d5b30d8f1bcd9925')


build() {
	cd ${srcdir}/${pkgname}-${pkgver}

	# Options according to http://openfst.cs.nyu.edu/twiki/bin/view/FST/ReadMe
	OPTIONS="--prefix=/usr --disable-dependency-tracking"
	OPTIONS+=" --enable-bin"            # Enable fst::script and command-line binaries;   Default: yes
	OPTIONS+=" --enable-compact-fsts"   # Enable all CompactFst classes;                  Default: no
	OPTIONS+=" --enable-compress"       # Enable compression extension;                   Default: no
	OPTIONS+=" --enable-const-fsts"     # Enable all ConstFst classes;                    Default: no
	OPTIONS+=" --enable-far"            # Enable FAR (FST Archive) extension;             Default: no
	OPTIONS+=" --enable-linear-fsts"    # Enable Linear{Tagger,Classifier}Fst extensions; Default: no
	OPTIONS+=" --enable-lookahead-fsts" # Enable LookAheadFst classes;                    Default: no
	OPTIONS+=" --enable-mpdt"           # Enable MPDT extensions;                         Default: no
	OPTIONS+=" --enable-ngram-fsts"     # Enable NGramFst extensions;                     Default: no
	OPTIONS+=" --enable-pdt"            # Enable PDT extensions;                          Default: no
	OPTIONS+=" --enable-python PYTHON=python2" # Enable Python extensions;                       Default: no
	LIBS="-ldl" ./configure $OPTIONS
	make
}

package() {
	cd ${srcdir}/${pkgname}-${pkgver}
	make DESTDIR=${pkgdir} install

	install -dm755 "$pkgdir"/etc/ld.so.conf.d/
	echo '/usr/lib/fst' > "$pkgdir"/etc/ld.so.conf.d/openfst.conf
}
