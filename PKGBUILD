# Maintainer: Daniel Peukert <daniel@peukert.cc>
# Contributor: Dustin Falgout <dustin@falgout.us>
pkgname='ttf-google-fonts-typewolf'
pkgver='20220222'
_commit='36f59ed45b86f74ce844292f73296788993c4072'
pkgrel='1'
pkgdesc="Typewolf's curated collection of the 40 best fonts from the Google Fonts project"
arch=('any')
url='https://www.typewolf.com/google-fonts'
license=('custom:SIL Open Font License v1.1' 'Apache')
provides=(
	'ttf-alegreya'
	'ttf-alegreya-sans'
	'ttf-archivo-narrow'
	'ttf-bio-rhyme'
	'ttf-cardo'
	'ttf-chivo'
	'ttf-cormorant'
	'ttf-dm-sans'
	'ttf-eczar'
	'ttf-fira-sans'
	'ttf-ibm-plex-sans'
	'ttf-inconsolata'
	'ttf-inknut-antiqua'
	'ttf-inter'
	'ttf-karla'
	'ttf-lato'
	'ttf-libre-baskerville'
	'ttf-libre-franklin'
	'ttf-lora'
	'ttf-manrope'
	'ttf-merriweather'
	'ttf-montserrat'
	'ttf-neuton'
	'ttf-open-sans' # Apache 2.0
	'ttf-playfair-display'
	'ttf-poppins'
	'ttf-proza-libre'
	'ttf-pt-sans'
	'ttf-pt-serif'
	'ttf-raleway'
	'ttf-roboto' # Apache 2.0
	'ttf-roboto-slab' # Apache 2.0
	'ttf-rubik'
	'ttf-source-sans-pro'
	'ttf-source-serif-pro'
	'ttf-space-grotesk'
	'ttf-space-mono'
	'ttf-spectral'
	'ttf-syne'
	'ttf-work-sans'
	# Aliases
	'adobe-source-sans-pro-fonts'
	'adobe-source-serif-pro-fonts'
	'montserrat-ttf'
	'ttf-librebaskerville'
	'ttf-opensans'
	'ttf-sourcesanspro'
	'ttf-spacemono'
)
conflicts=(
	"${provides[@]}"
	'adobe-source-sans-fonts'
	'adobe-source-serif-fonts'
	'ttf-adobe-fonts'
	'ttf-google-fonts-git'
	'ttf-google-fonts-opinionated-git'
	'ttf-ibm-plex'
)
_ignore=(
	'Inconsolata[wdth,wght].ttf'
	'Roboto[wdth,wght].ttf'
	'Roboto-Italic[wdth,wght].ttf'
)
source=("$pkgname-$pkgver-$pkgrel.tar.gz::https://github.com/google/fonts/archive/$_commit.tar.gz")
sha512sums=('ce2e2ec4bd5d8ca6680419874fb2cecda26b772af69bd0504b5c40e0a36531d8b0160369541ad1e863c17c20f13e7f346700e9926b39fdbcbac4e94c8ca7addb')

package() {
	cd "$srcdir/fonts-$_commit/"

	install -Dm644 'ofl/alegreya/OFL.txt' "$pkgdir/usr/share/licenses/$pkgname/OFL.txt"

	# Remove hyphens from each element in array
	_fonts="${provides[@]//-/}"
	# Remove 'ttf' from each element in array
	_fonts="${_fonts[@]//ttf/}"
	# Replace spaces with pipe symbols
	_regex="${_fonts[*]// /|}"

	# Escape filenames in ignore list
	_ignore="${_ignore[@]//[/\\[}"
	_ignore="${_ignore[@]//]/\\]}"
	_ignore="${_ignore[@]//./\\.}"
	# Replace spaces with pipe symbols
	_ignoreregex="${_ignore[*]// /|}"

	install -dm755 "$pkgdir/usr/share/fonts/TTF"

	find . \
		-type f \
		-regextype egrep \
		-regex ".*/($_regex)/.+\.ttf" \
		! -regex ".*/($_ignoreregex)" \
		-execdir install -Dm644 '{}' "$pkgdir/usr/share/fonts/TTF" \;
}
