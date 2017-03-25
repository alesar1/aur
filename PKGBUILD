# Maintainer: Jingbei Li <i@jingbei.lli>
pkgname='kaldi'
pkgdesc='Speech recognition research toolkit'
pkgver=5.1.r7282.0d0316b48
pkgrel=1
makedepends=('gcc5' 'git' 'wget' 'subversion')
depends=('python2' 'openblas-lapack')
optdepends=('cuda: For GPU support')
arch=('x86_64' 'i686')
url='https://github.com/kaldi-asr/kaldi'
license=('APACHE')
source=("${pkgname}::git+${url}"
"srilm.tgz::https://www.dropbox.com/s/41y27or8lco4fju/srilm-1.7.2.tar.gz?dl=1"
"env.sh")
noextract=('srilm.tgz')
sha256sums=('SKIP'
'a528a778f881c679233f94d7b26d6f795129fa6009b32305c8ce769f66e223b4'
'c5a6996059077a2988a10344e07ad278f17552cc0d9ea0a3f074fa27c1ed387a')

pkgver () {
	cd "${pkgname}"
	(
	set -o pipefail
	echo -n `cat src/.version`.
	git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

prepare(){
	cd $srcdir/$pkgname
	find . -name '*.py' -exec sed '1s/python/python2/' -i {} \;

	if (pacman -Q cuda &> /dev/null); then
		msg2 "Compiling with CUDA support"
		_cuda_config_opts="--cudatk-dir=/opt/cuda"
	else
		msg2 "Compiling _without_ CUDA support"
	fi
}

build () {
	cd $srcdir/$pkgname/tools
	sed -e '/^sclite_compiled/s/ sctk_configured//' \
		-e 's?^\(\tcd openfst-[^\s]* \./configure --prefix\)=`pwd`?\1=/opt/'$pkgname'/tools/openfst-$(OPENFST_VERSION)?' \
		-e 's?^\(\t\$(MAKE) -C openfst-[^\s]*\) \(install\)?\1 DESTDIR='$srcdir/$pkgname' \2?' \
		-i Makefile
	sed 's/^exit/# exit/' -i extras/check_dependencies.sh
	make CXX=g++-5 sph2pipe openfst sctk_configured

	OPENFST=../opt/$pkgname/tools/openfst-*
	mv openfst-*/Makefile $OPENFST/
	rm -r openfst-*/
	mv $OPENFST ./

	sed '/^DEFS/s/ -Dsize_t=unsigned//' -i sctk/src/sclite/makefile
	make sclite

	CXX=g++-5 extras/install_irstlm.sh
	extras/install_kaldi_lm.sh
	chmod +rx kaldi_lm

	ln -sf $srcdir/srilm.tgz .
	extras/install_srilm.sh

	cd $srcdir/$pkgname/src
	./configure $_cuda_config_opts \
		--shared \
		--openblas-root=/usr \
		--threaded-math=yes
	make CXX=g++-5 depend
	make CXX=g++-5
}

package () {
	cd $srcdir/$pkgname
	for i in "*.tar*" "*.c" "*.cc" "*.cu" "*.cpp" "*.h" "*.o" "*.a" "*.lo" "*.la" "*.mk" "Makefile*" "makefile*" "*.bak" "*.log" "*.status" "*.~*"
	do
		find . -type f -name "$i" -exec rm -f {} \;
	done

	find . -name 'path.sh' -exec sed 's?^\(export KALDI_ROOT\)=.*$?\1=/opt/'$pkgname'?' -i {} \;

	rm tools/srilm.tgz
	rm tools/srilm/lm/src/Dependencies.i686-m64

	mkdir -p $pkgdir/opt/$pkgname/tools
	cp -rL src $pkgdir/opt/$pkgname
	cp -r misc egs $pkgdir/opt/$pkgname
	cp -r tools/CLAPACK \
		tools/config \
		$startdir/env.sh \
		tools/extras \
		tools/irstlm \
		tools/kaldi_lm \
		tools/liblbfgs* \
		tools/openfst* \
		tools/s* \
		$pkgdir/opt/$pkgname/tools

	install -dm755 "$pkgdir"/etc/ld.so.conf.d/
	echo '/opt/kaldi/src/lib' > "$pkgdir"/etc/ld.so.conf.d/kaldi.conf
}
