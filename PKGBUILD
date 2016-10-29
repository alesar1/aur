# Maintainer: Andreas Hauser <andy-aur@splashground.de>
# Former Maintainer: Christoph Drexler <chrdr at gmx dot at>

pkgname=openfst
pkgver=1.5.4.1
pkgrel=1
pkgdesc="Library for constructing, combining, optimizing, and searching weighted finite-state transducers (FSTs)"
arch=('i686' 'x86_64')
url="http://www.openfst.org/"
license=('APACHE')
depends=('gcc-libs' 'glibc' 'python2')
options=(!libtool)
source=("http://openfst.cs.nyu.edu/twiki/bin/viewfile/FST/FstDownload?filename=${pkgname}-${pkgver/%.?/}.tar.gz;rev=${pkgver/*./}")
sha256sums=('acc115aaaa33de53de62dae44120ab368fabaea06f52606b77714081ecd32657')


build() {
	cd ${srcdir}/${pkgname}-${pkgver/%.?/}

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
	cd ${srcdir}/${pkgname}-${pkgver/%.?/}
	make DESTDIR=${pkgdir} install

	install -dm755 "$pkgdir"/etc/ld.so.conf.d/
	echo '/usr/lib/fst' > "$pkgdir"/etc/ld.so.conf.d/openfst.conf
}
