# Maintainer: Falk Alexander Seidl <fa@terminal.run>

pkgname=python-pykeepass-git
_gitname=pykeepass
pkgver=2.8.2.r5.g0fd4de7
pkgrel=1
pkgdesc="Low-level library to interact with keepass databases"
arch=("any")
license=("GPL3")
url="https://github.com/pschmitt/pykeepass"
depends=("python" "python-pycryptodome" "python-lxml" "python-dateutil" "python-construct" "python-cffi" "python-argon2_cffi" "python-markupsafe" "python-pycparser")
makedepends=("python-setuptools")
provides=(python-pykeepass)
conflicts=(python-pykeepass)
source=("git+https://github.com/pschmitt/pykeepass.git"
        "0001-Include-all-package-data.patch"
        "0001-Add-egg-info.patch"
        "0001-Strip-out-non-ASCII-characters-on-decrypt.patch")
sha512sums=('SKIP'
            '01f89906a5350b314f5141c2590bd2d58d48fd4e714bc5c6f9f439be32180e0a20c49516a8c6cee5f56bef1d60187f26c5dca06b668e4b41392a25a523713447'
            '14eace890f4a1747600fcdad790aa719d908b9b64e8a49368fd5ebca348ad22d8ca8c5b80defd3664cc46e9c25000c984cd506445ed0df0125cc57a4b36fc81e'
            'bd4501a4c1d420479d289da53f997a496dbe7132e5125526167cdd23d0d606bbecf429cb40bb177b317bb315332f575bcbf2fe47287715e515f4132ac167810f')

pkgver() {
	cd "${srcdir}/${_gitname}/"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
        cd "${srcdir}/${_gitname}/"
        # Don't miss package data
        patch -Np1 -i ../0001-Include-all-package-data.patch
        patch -Np1 -i ../0001-Add-egg-info.patch
        # XML builder fix
        patch -Np1 -i ../0001-Strip-out-non-ASCII-characters-on-decrypt.patch
}

package() {
        cd "${srcdir}/${_gitname}/"
        python setup.py install --root="${pkgdir}/" --optimize=1
        install -m 644 -D LICENSE "${pkgdir}/usr/share/licenses/${_gitname}/LICENSE"
}

