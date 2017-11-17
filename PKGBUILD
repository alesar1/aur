# Contributor: Patrick McCarty <pnorcks at gmail dot com>
# Contributor: David Roheim < david dot roheim at gmail dot com >
# Contributor: Thomas Dziedzic < gostrc at gmail >

# Uncomment to enable usermode support
#_with_usermode=1

pkgname=mock
_pkgver=1.4.7
_rpmrel=1
_pkgtag=$pkgname-$_pkgver-$_rpmrel
pkgver=$_pkgver.$_rpmrel
pkgrel=2
pkgdesc="A simple chroot build environment manager for building RPMs"
url="https://github.com/rpm-software-management/$pkgname"
arch=('any')
license=('GPL2')
depends=('distribution-gpg-keys' 'python' 'python-distro' 'python-pyroute2')
((_with_usermode)) && depends+=('usermode')
optdepends=('createrepo_c: for mockchain command'
            'dnf-plugins-core: to create RPMs for Fedora >= 24 and for Mageia'
            'lvm2: for lvm_root plugin'
            'nosync: to speed up yum/dnf database access'
            'pigz: for parallel compression of chroot cache'
            'python-requests: for mockchain command'
            'yum-utils: to create RPMs for Fedora <= 23 (including EL5, EL6 and EL7)')
install="$pkgname.install"
backup=("etc/$pkgname/site-defaults.cfg")
source=("$url/archive/$_pkgtag.tar.gz"
        "$pkgname.sysusers"
        "$pkgname.tmpfiles")
md5sums=('1f197683cfc54ca6c5bec85b04bbdec3'
         'd277502b9a95484594f86231d073dae0'
         '1052fa4db74b59b0c195f4756bd865e8')

_prefix=/usr
_bindir=$_prefix/bin
_datadir=$_prefix/share
_mandir=$_datadir/man
_sysconfdir=/etc

prepare() {
	mv "$pkgname-$_pkgtag" "$pkgname-$pkgver"
}

build() {
	cd "$pkgname-$pkgver"

	pushd mock >/dev/null

	python_sitelib=$(python -c 'from distutils.sysconfig import get_python_lib; import sys; sys.stdout.write(get_python_lib())')
	sed -r -i py/${pkgname}{,chain}.py \
	    -e 's|^__VERSION__\s*=.*|__VERSION__="'$_pkgver'"|' \
	    -e 's|^SYSCONFDIR\s*=.*|SYSCONFDIR="'$_sysconfdir'"|' \
	    -e 's|^PYTHONDIR\s*=.*|PYTHONDIR="'$python_sitelib'"|' \
	    -e 's|^PKGPYTHONDIR\s*=.*|PKGPYTHONDIR="'$python_sitelib'/mockbuild"|'

	# Replace /usr/libexec path in help message
	sed -r -i py/$pkgname.py \
	    -e 's|/usr/libexec/mock/mock|/usr/bin/mock.py|'

	sed -e "s|@VERSION@|$_pkgver|" -i docs/${pkgname}{,chain}.1

	python    -m compileall py/ -q
	python -O -m compileall py/ -q

	popd >/dev/null
}

package() {
	cd "$pkgname-$pkgver"

	pushd mock >/dev/null

	mkdir -p "$pkgdir/$_bindir/"
	install -Dp -m755 py/mock.py      "$pkgdir/$_bindir/"mock
	install -Dp -m755 py/mockchain.py "$pkgdir/$_bindir/"mockchain

	mkdir -p "$pkgdir/$_sysconfdir/"pam.d
	cp -Rp etc/pam/* "$pkgdir/$_sysconfdir/"pam.d/

	mkdir -p "$pkgdir/$_sysconfdir/"mock
	cp -Rp etc/mock/* "$pkgdir/$_sysconfdir/"mock/

	mkdir -p "$pkgdir/$_datadir/"bash-completion/completions
	cp -Rp etc/bash_completion.d/* "$pkgdir/$_datadir/"bash-completion/completions/
	ln -s mock "$pkgdir/$_datadir/"bash-completion/completions/mockchain

	mkdir -p "$pkgdir/$_sysconfdir/"pki/mock
	cp -Rp etc/pki/* "$pkgdir/$_sysconfdir/"pki/mock/

	python_sitelib=$(python -c 'from distutils.sysconfig import get_python_lib; import sys; sys.stdout.write(get_python_lib())')
	mkdir -p "$pkgdir/$python_sitelib/"
	cp -Rp py/mockbuild "$pkgdir/$python_sitelib/"

	mkdir -p "$pkgdir/$_mandir/"man1
	cp -Rp docs/${pkgname}{,chain}.1 "$pkgdir/$_mandir/"man1/

	if ((_with_usermode)); then
		mkdir -p "$pkgdir/$_sysconfdir/"security/console.apps/
		cp -Rp etc/consolehelper/$pkgname "$pkgdir/$_sysconfdir/"security/console.apps/$pkgname

		mv "$pkgdir/usr/bin/$pkgname"{,.py}
		sed -e "s|/usr/libexec/$pkgname/$pkgname|/usr/bin/$pkgname.py|" \
		    -i "$pkgdir/etc/security/console.apps/$pkgname"
		ln -s /usr/bin/consolehelper "$pkgdir/usr/bin/$pkgname"
	fi

	popd >/dev/null

	pushd mock-core-configs >/dev/null

	install -Dp -m644 etc/mock/*.cfg "$pkgdir/$_sysconfdir/"mock/

	popd >/dev/null

	install -Dp -m644 "$srcdir/$pkgname.sysusers" "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
	install -Dp -m644 "$srcdir/$pkgname.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}

# vim: set ft=sh ts=4 sw=4 noet:
