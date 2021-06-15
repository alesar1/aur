# Maintainer: Dušan Simić <dusan.simic1810@gmail.com>

pkgname=svetovid-lib-bin
_name=svetovid-lib
pkgver=0.5.0
_ghver=0.5
pkgrel=1
pkgdesc='Supplement Library for Introductory Programming Courses'
arch=(any)
url='https://github.com/ivanpribela/svetovid-lib'
license=('APACHE')
depends=('java-runtime')
provides=('svetovid-lib')
conflicts=('svetovid-lib')
source=("https://github.com/ivanpribela/${_name}/releases/download/v${_ghver}/svetovid-lib.jar"
        "https://github.com/ivanpribela/${_name}/blob/v${_ghver}/LICENSE"
				"https://github.com/ivanpribela/${_name}/blob/v${_ghver}/NOTICE")
noextract=('svetovid-lib.jar')
sha512sums=('3e827a7aff7c6cdf3ab28a78c16aa3240c5c0619b52ee6ea3bccf51b055c4d1b08f9d9f42e8273b17d4da885ffde198ca3d4c4e02c467286fbea55a6770c0158'
            '54825fc8c8753230686c8076327f14ef401d49994f8f9d014c62c864bacdc055247029599a6908dc6d200ee0a36c09fb1c325d0ea92390d48d0ebe4a86ef959f'
            'ef149d49d4c0820abf608faab4f0089736dd364b5a1a99e5c8bdb3723cf8a3fcbb787c7f9dcaf0174cee68977be6a66a0c686b52c318e1eebb464a8d1eb08e8f')

package() {
	cd "${srcdir}"

	install -Dm644 "${_name}.jar" "${pkgdir}/usr/share/java/${_name}/${_name}.jar"

	install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${_name}/LICENSE"
	install -Dm644 "NOTICE" "${pkgdir}/usr/share/licenses/${_name}/NOTICE"
}
