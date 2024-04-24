/**
 * Creator Name: The Umbraco community
 * Creator Link: https://docs.umbraco.com/umbraco-cms/extending/language-files
 *
 * Language Alias: ko
 * Language Int Name: Korean
 * Language Local Name: 한국어
 * Language LCID: 18
 * Language Culture: ko-KR
 */
import type { UmbLocalizationDictionary } from '@umbraco-cms/backoffice/localization-api';
export default {
	actions: {
		assigndomain: '호스트명 관리',
		auditTrail: '감사 추적',
		browse: '노드 탐색',
		copy: '복사',
		create: '새로 만들기',
		createPackage: '패키지 새로 만들기',
		delete: '삭제',
		disable: '비활성',
		emptyrecyclebin: '휴지통 비우기',
		exportDocumentType: '추출 문서 유형',
		importdocumenttype: '등록 문서 유형',
		importPackage: '패키지 등록',
		liveEdit: '캔버스 내용 편집',
		logout: '종료',
		move: '이동',
		notify: '알림',
		protect: '퍼블릭 접근',
		publish: '발행',
		refreshNode: '노드 새로 고침',
		republish: '전체 사이트 재발행',
		rights: '권한',
		rollback: '롤백',
		sendtopublish: '발행 항목으로 전달',
		sendToTranslate: '번역 항목으로 전달',
		sort: '정렬',
		translate: '번역',
		update: '업데이트',
	},
	assignDomain: {
		addNew: '새로운 도메인 추가',
		domain: '도메인',
		domainCreated: "새로운 '%0%' 도메인이 생성되었습니다",
		domainDeleted: "'%0%' 도메인이 삭제되었습니다",
		domainExists: "'%0%' 도메인이 이미 존재합니다",
		domainUpdated: "'%0%' 도메인이 업데이트 되었습니다",
		orEdit: '현재 도메인 수정',
	},
	auditTrails: {
		atViewingFor: '보기',
	},
	buttons: {
		bold: '굵게',
		deindent: '단락 들여쓰기 취소',
		formFieldInsert: '폼 필드 삽입',
		graphicHeadline: '그래픽 헤드라인 삽입',
		htmlEdit: 'Html 편집',
		indent: '단락 들여쓰기',
		italic: '기울임꼴',
		justifyCenter: '가운데 맞춤',
		justifyLeft: '왼쪽 맞춤',
		justifyRight: '오른쪽 맞춤',
		linkInsert: '하이퍼 링크',
		linkLocal: '기호 삽입',
		listBullet: '기호 목록',
		listNumeric: '번호 목록',
		macroInsert: '매크로 삽입',
		pictureInsert: '이미지 삽입',
		relations: '관계 편집',
		save: '저장',
		saveAndPublish: '저장 후 발행',
		saveToPublish: '저장 후 승인을 위해 전송',
		saveAndPreview: '미리보기',
		styleChoose: '스타일 선택',
		styleShow: '스타일 보기',
		tableInsert: '테이블 삽입',
	},
	content: {
		about: '이 페이지 정보',
		alias: '대체 링크',
		alternativeTextHelp: '(전화위에 그림을 어떻게 설명하시겠습니까)',
		alternativeUrls: '대체 링크',
		clickToEdit: '이 항목을 편집하시려면 클릭하세요.',
		createBy: '작성자',
		createDate: '생성일',
		documentType: '문서 유형',
		editing: '편집',
		expireDate: '삭제됨',
		itemChanged: '이 항목은 발행후 변경되었습니다.',
		itemNotPublished: '이 항목은 발행되지 않았습니다.',
		lastPublished: '마지막 발행일',
		mediatype: '미디어 타입',
		membergroup: '사용자 그룹',
		memberrole: '역할',
		membertype: '사용자 타입',
		noDate: '날짜가 선택되지 않았습니다.',
		nodeName: '페이지 제목',
		otherElements: '속성',
		parentNotPublished: "이문서는 발행되었지만 부모문서 '%0%'가 발행되지 않아 볼 수 없습니다.",
		publish: '발행',
		publishStatus: '발행 상태',
		releaseDate: '발행됨',
		removeDate: '날짜 삭제',
		sortDone: '정렬이 업데이트되었습니다.',
		sortHelp:
			'노드를 드래그하거나 컬럼헤더를 클릭하면 노드가 정렬됩니다. 쉬프트키나 컨트롤키를 이용하면 여러노드선택이 가능합니다.',
		statistics: '통계',
		titleOptional: '제목(옵션)',
		type: '유형',
		unpublish: '발행취소',
		updateDate: '마지막 수정일',
		uploadClear: '파일 삭제',
		urls: '문서에 링크',
	},
	create: {
		chooseNode: '새로운 %0% (을)를 생성할 위치를 지정하십시오',
		createUnder: '생성자',
		updateData: '타입과 제목을 선택하세요',
	},
	dashboard: {
		browser: '브라우저에서 보기',
		dontShowAgain: "TRANSLATE ME: '- Hide'",
		nothinghappens: 'Umbraco 가 열리지 않으면, 이 사이트의 팝업을 허용하여야 합니다',
		openinnew: '새로운 창으로 열렸습니다',
		restart: '재시작',
		visit: '방문',
		welcome: '환영합니다',
	},
	prompt: {
		stay: 'Stay',
		discardChanges: 'Discard changes',
		unsavedChanges: 'You have unsaved changes',
		unsavedChangesWarning: 'Are you sure you want to navigate away from this page? - you have unsaved changes',
	},
	bulk: {
		done: 'Done',
		deletedItem: 'Deleted %0% item',
		deletedItems: 'Deleted %0% items',
		deletedItemOfItem: 'Deleted %0% out of %1% item',
		deletedItemOfItems: 'Deleted %0% out of %1% items',
		publishedItem: 'Published %0% item',
		publishedItems: 'Published %0% items',
		publishedItemOfItem: 'Published %0% out of %1% item',
		publishedItemOfItems: 'Published %0% out of %1% items',
		unpublishedItem: 'Unpublished %0% item',
		unpublishedItems: 'Unpublished %0% items',
		unpublishedItemOfItem: 'Unpublished %0% out of %1% item',
		unpublishedItemOfItems: 'Unpublished %0% out of %1% items',
		movedItem: 'Moved %0% item',
		movedItems: 'Moved %0% items',
		movedItemOfItem: 'Moved %0% out of %1% item',
		movedItemOfItems: 'Moved %0% out of %1% items',
		copiedItem: 'Copied %0% item',
		copiedItems: 'Copied %0% items',
		copiedItemOfItem: 'Copied %0% out of %1% item',
		copiedItemOfItems: 'Copied %0% out of %1% items',
	},
	defaultdialogs: {
		anchorInsert: '이름',
		assignDomain: '호스트네임 관리',
		closeThisWindow: '이창 닫기',
		confirmdelete: '정말로 삭제하시겠습니까?',
		confirmdisable: '정말로 비활성화하시겠습니까?',
		confirmlogout: '로그아웃 하시겠습니까?',
		confirmSure: '확실합니까?',
		cut: "TRANSLATE ME: 'Cut'",
		editdictionary: '사전 항목 편집',
		editlanguage: '언어 편집',
		insertAnchor: '내부 링크삽입',
		insertCharacter: '문자열 삽입',
		insertgraphicheadline: '그래픽 헤드라인 삽입',
		insertimage: '그림삽입',
		insertlink: '링크 삽입',
		insertMacro: '매크로 추가 클릭',
		inserttable: '테이블 삽입',
		lastEdited: '마지막 수정',
		link: '링크',
		linkinternal: '내부링크:',
		linklocaltip: '내부링크를 사용하실 때 링크앞에 "#"를 넣어주세요',
		linknewwindow: '새 창으로 여시겠습니까?',
		macroDoesNotHaveProperties: '이 매크로에는 편집할 수 있는 항목이 포함되어 있지 않습니다.',
		paste: '붙여넣기',
		permissionsEdit: '권한 편집',
		recycleBinDeleting: '휴지통안에 이 항목들이 완전히 삭제중 입니다. 작업이 완료되기전까지 창을 닫지마세요.',
		recycleBinIsEmpty: '휴지통이 비었습니다.',
		recycleBinWarning: '휴지통에서 삭제하시면 완전히 삭제됩니다.',
		regexSearchError:
			"<a target='_blank' rel='noopener' href='http://regexlib.com'>regexlib.com</a>의 웹서비스는 현재 제어할 수 없는 몇가지 문제점이 보고되었습니다. 불편을 드려 대단히 죄송합니다.",
		regexSearchHelp: "필드 유효성검사를 위해 정규표현식을 검색합니다. 예: 'email, 'zip-code' 'URL'",
		removeMacro: '매크로 삭제',
		requiredField: '필수 필드',
		sitereindexed: '사이트의 색인이 재생성되었습니다.',
		siterepublished:
			'웹사이트 캐쉬가 재생되었습니다. 모든 발행컨텐츠가 업데이트되었습니다. 그러나 모든 미발행 컨텐츠는 여전히 미발행상태입니다.',
		siterepublishHelp:
			'웹사이트 캐쉬가 재생되었습니다. 모든 발행컨텐츠가 업데이트되었습니다. 그러나 모든 미발행 컨텐츠는 미발행상태로 남아있습니다.',
		tableColumns: '컬럼수',
		tableRows: '줄수',
		thumbnailimageclickfororiginal: '이미지를 전체크기로 보시려면 클릭하세요.',
		treepicker: '아이템 선택',
		viewCacheItem: '캐쉬 아이템 보기',
	},
	dictionaryItem: {
		description:
			"\n    '<em>%0%</em>'사전 항목 아래에 다른 언어버전들을 편집하세요<br/>왼쪽 '언어'메뉴를 사용하여 추가 언어들을 설정할 수 있습니다.\n ",
		displayName: '국가명',
	},
	editdatatype: {
		addPrevalue: '이전값 더하기',
		dataBaseDatatype: '데이터베이스 데이터타입',
		guid: '데이터타입 GUID',
		renderControl: 'Render 컨트롤',
		rteButtons: '버튼',
		rteEnableAdvancedSettings: '고급설정 사용',
		rteEnableContextMenu: 'context 메뉴 사용',
		rteMaximumDefaultImgSize: '삽입이미지의 기본사이즈 최대값',
		rteRelatedStylesheets: '관련 스타일시트',
		rteShowLabel: '라벨 보기',
		rteWidthAndHeight: '너비와 높이',
	},
	errorHandling: {
		errorButDataWasSaved: '데이터가 저장되었지만, 이 페이지를 발행하기전에 에러들부터 수정하셔야 합니다',
		errorChangingProviderPassword:
			'현재의 멤버쉽 프로바이더는 암호변경을 지원하지 않습니다(EnablePasswordRetrieval need to be true)',
		errorExistsWithoutTab: '%0% 은 이미 존재합니다.',
		errorHeader: '에러:',
		errorHeaderWithoutTab: '에러:',
		errorInPasswordFormat: '암호는 최소 %0% 자 이상이며 적어도 %1% 개의 알파벳이 아닌 문자를 포함해야 합니다.',
		errorIntegerWithoutTab: '%0% must be an integer',
		errorMandatory: 'The %0% field in the %1% tab is mandatory',
		errorMandatoryWithoutTab: '%0% 은 필수선택 항목입니다.',
		errorRegExp: '%0% at %1% 올바른 형식이 아닙니다.',
		errorRegExpWithoutTab: '%0% 올바른 형식이 아닙니다.',
	},
	errors: {
		codemirroriewarning:
			'주의! CodeMirror가 설정에서 활성화 되었어도 충분히 안정적이지 않기 때문에 인터넷 익스플로러에선 비활성화 됩니다.',
		contentTypeAliasAndNameNotNull: '새 속성타입에 이름과 별칭을 모두 채우세요!',
		filePermissionsError: '특정 파일또는 폴더에 읽기/쓰기 접근제한 문제가 있습니다',
		missingTitle: '제목을 넣어주세요',
		missingType: '유형을 선택해주세요',
		pictureResizeBiggerThanOrg: '원본크기보다 큰사이즈의 이미지를 만들려고 합니다. 계속하시겠습니까?',
		startNodeDoesNotExists: '시작노드가 삭제되었습니다. 관리자에게 문의하세요',
		stylesMustMarkBeforeSelect: '스타일을 변경하시기 전에 컨텐츠를 체크하세요',
		stylesNoStylesOnPage: '사용할 수 있는 스타일이 없습니다.',
		tableColMergeLeft: '합치기 원하시는 두셀의 왼쪽에 커서를 가져다놓으세요',
		tableSplitNotSplittable: '병합되지 않은 셀을 분리할 수 없습니다.',
	},
	general: {
		about: '정보',
		action: '액션',
		add: '추가',
		alias: '별칭',
		areyousure: '확실합니까?',
		border: '경계선',
		by: '또는',
		cancel: '취소',
		cellMargin: '셀 마진',
		choose: '선택',
		close: '닫기',
		closewindow: '창 닫기',
		comment: '코멘트',
		confirm: '확인',
		constrainProportions: '비율 맞추기',
		continue: '계속',
		copy: '복사',
		create: '생성',
		database: '데이타베이스',
		date: '날짜',
		default: '기본',
		delete: '삭제',
		deleted: '삭제됨',
		deleting: '삭제중...',
		design: '디자인',
		dimensions: '범위',
		down: '아래로',
		download: '다운로드',
		edit: '편집',
		edited: '편집됨',
		elements: '항목',
		email: '이메일',
		error: '에러',
		findDocument: '찾기',
		height: '높이',
		help: '도움말',
		icon: '아이콘',
		import: '가져오기',
		innerMargin: '내부 마진',
		insert: '삽입',
		install: '설치',
		justify: '적용',
		language: '언어',
		layout: '레이아웃',
		loading: '로딩',
		locked: "TRANSLATE ME: 'Locked'",
		login: '로그인',
		logoff: '로그오프',
		logout: '로그아웃',
		macro: '매크로',
		move: '이동',
		name: '이름',
		new: '새로',
		next: '다음',
		no: '아니요',
		of: '의',
		ok: '완료',
		open: '열기',
		or: '또는',
		password: '비밀번호',
		path: '경로',
		pleasewait: '잠시만 기다려주세요...',
		previous: '이전',
		properties: '속성',
		reciept: '수신된 폼데이터 이메일전송',
		recycleBin: '휴지통',
		remaining: '남아있는',
		rename: '이름바꾸기',
		renew: "TRANSLATE ME: 'Renew'",
		retry: '재시도',
		rights: '권한',
		search: '검색',
		server: '서버',
		show: '보기',
		showPageOnSend: '전송된 페이지보기',
		size: '사이즈',
		sort: '정렬',
		submit: 'Submit',
		type: '타입',
		typeToSearch: '검색유형...',
		up: '위로',
		update: '업데이트',
		upgrade: '업그레이드',
		upload: '업로드',
		url: 'URL',
		user: '사용자',
		username: '사용자',
		value: '값',
		view: '보기',
		welcome: '환영합니다...',
		width: '너비',
		yes: '예',
		reorder: 'Reorder',
		reorderDone: 'I am done reordering',
	},
	graphicheadline: {
		backgroundcolor: '배경색',
		bold: '굵게',
		color: '글자색',
		font: '폰트',
		text: '글꼴',
	},
	headers: {
		page: '페이지',
	},
	installer: {
		databaseErrorCannotConnect: '인스톨러가 데이터베이스에 연결할 수 없습니다.',
		databaseFound: '데이터베이스가 확인되었으며 정보는 ',
		databaseHeader: '데이터베이스 설정',
		databaseInstall: '<strong>설치</strong> 버튼을 누르면 Umbraco %0% 데이터베이스가 설치됩니다.',
		databaseInstallDone: 'Umbraco %0% 가 데이터베이스에 복사되었습니다. 계속하시려면 <strong>다음</strong>을 누르세요.',
		databaseText:
			'이과정을 위해선, 당신의 DB서버 정보에 대해서 알고 계셔야합니다.("connection string").<br />\n      필요하시다면 사용하시는 ISP쪽에 문의하시기 바랍니다..\n      로컬 머신이나 서버에 설치되어 있다면 해당 시스템 관리자에게 문의하시기 바랍니다.',
		databaseUpgrade:
			'<p><strong>업그레이드</strong> 버튼을 누르면 여러분의 데이터베이스를 Umbraco %0% 로 업데이트합니다.</p><p>어떤 컨텐트도 삭제되지 않으니 걱정마세요!</p>',
		databaseUpgradeDone:
			'데이터베이스가 최신 버전 %0% 로 업그레이드 되었습니다.<br />계속 진행하시려면 <strong>다음</strong> 을 누르세요. ',
		databaseUpToDate:
			'데이터베이스가 업데이트 되었습니다. <strong>다음</strong>을 클릭하시면 설정마법사를 계속 진행합니다.',
		defaultUserChangePass: '<strong>기본 사용자의 암호가 변경되어야 합니다!</strong>',
		defaultUserDisabled:
			'<strong>기본 사용자가 비활성화되었거나 Umbraco에 접근할 수 없습니다!</strong></p><p>더 이상 과정이 필요없으시면 <strong>다음</strong>을 눌러주세요.',
		defaultUserPassChanged:
			'<strong>설치후 기본사용자의 암호가 성공적으로 변경되었습니다!</strong></p><p>더 이상 과정이 필요없으시면 <strong>다음</strong>을 눌러주세요.',
		defaultUserPasswordChanged: '비밀번호가 변경되었습니다!',
		greatStart: '편리한 시작을 위해, 소개 Video를 시청하세요',
		None: '아직 설치되지 않았습니다.',
		permissionsAffectedFolders: '영향받는 파일과 폴더',
		permissionsAffectedFoldersMoreInfo: 'Umbraco권한관리을 위해 더정보가 필요하시면 여기를 누르세요',
		permissionsAffectedFoldersText: '다음 파일/폴더에 ASP.NET 수정권한이 필요합니다.',
		permissionsAlmostPerfect:
			'<strong>권한 설정이 대부분 완벽합니다!</strong><br /><br />\n      여러분은 문제없이 Umbraco사용이 가능하지만 일부 추천 패키지가 설치되지 않을 수 있습니다.',
		permissionsHowtoResolve: '문제해결방법',
		permissionsHowtoResolveLink: '문서버전을 읽으시려면 클릭하세요',
		permissionsHowtoResolveText:
			'Umbraco를 위한 폴더권한세팅을 위해 텍스트 버전을 읽으시거나 저희 <strong>Video tutorial</strong>를 시청하세요.',
		permissionsMaybeAnIssue:
			'<strong>퍼미션 세팅에 문제가 있을 수 있습니다.</strong>\n    <br/><br />\n    Umbraco를 문제없이 실행할 수 있지만, 폴더를 만들거나 추천패키지를 설치하지 못할 수 있습니다.',
		permissionsNotReady:
			'<strong>권한 설정이 완료되지 않았습니다!</strong>\n        <br /><br />\n        Umbraco 실행을 위해, 권한설정을 업데이트하세요.',
		permissionsPerfect:
			'<strong>권한세팅이 완벽합니다!</strong><br /><br />\n            Umbraco 패키지 설치를 진행할 준비가 되었습니다. ',
		permissionsResolveFolderIssues: '폴더 문제해결',
		permissionsResolveFolderIssuesLink: '다음 링크는 ASP.NET이나 폴더생성문제에 대한 더 많은 정보를 제공합니다.',
		permissionsSettingUpPermissions: '폴더 권한 세팅',
		permissionsText:
			'Umbraco 는 특정 디렉토리에 쓰기/수정 권한이 필요합니다. 이것은 PDF나 그림과 같은 파일을 저장하고 cache같은 임시데이터을 위해 사용됩니다.',
		runwayFromScratch: 'scratch를 시작하기 원합니다.',
		runwayFromScratchText:
			'\n      사이트가 완전히 비어있는 상태입니다. 스크래치를 시작하시거나 문서유형, 템플릿을 만드시기에 완벽한 상태입니다.\n      (<a href="https://umbraco.tv/documentation/videos/for-site-builders/foundation/document-types">learn how</a>)\n      Runway설치를 나중에 실행하실 수 있습니다. 개발도구 부분에서 패키지를 선택하세요.\n    ',
		runwayHeader: '여러분은 Umbraco 플랫폼 설치를 완료하였습니다. 다음엔 어떤 작업을 원하십니까?',
		runwayInstalled: 'Runway 가 설치됨',
		runwayInstalledText:
			'\n    이곳은 설치관리페이지입니다. 설치를 원하시는 모듈을 선택하세요.<br />\n    이것은 저희가 권장하는 모듈들입니다. 설치를 원하시는 모듈을 확인하세요 모듈이 없다면 <a href="#" onclick="toggleModules(); return false;" id="toggleModuleList">전체 모듈리스트</a>를 보세요\n    ',
		runwayOnlyProUsers: '경험이 있는 사용자 분들만 추천합니다.',
		runwaySimpleSite: '간단한 웹사이트 생성을 원합니다.',
		runwaySimpleSiteText:
			'\n    <p>\n    "Runway" 는 간단한 웹사이트 생성을 위한 기본 문서타입과 템플릿을 제공합니다. 인스톨러를 이용해 Runway를 자동으로 설치하신 후\n    여러분은 쉽게 수정, 확장, 삭제가 가능하십니다.\n    Umbraco에 익숙하시다면 Runway 가 필요없지만 그렇지 않으신경우 Runway는 가장 빨리 시작할 수 있는 최고의 예제를 제공합니다.\n    Runway 설치를 선택하시면, 여러분은 옵션으로 Runway 페이지에 쓰이는 Runway 모듈로 불리는 기본 빌딩 블록들을 선택하실 수 있습니다.\n    </p>\n      <small>\n      <em>Runway 포함사항:</em> 홈페이지, Getting Started 페이지, 모듈 설치페이지.<br />\n      <em>옵션 모듈들:</em> 네이게이션, 사이트맵, 연락처, 갤러리.\n      </small>\n    ',
		runwayWhatIsRunway: 'Runway 란?',
		step1: 'Step 1/5 라이센스 허가',
		step2: 'Step 2/5 데이터베이스 설정',
		step3: 'Step 3/5 파일권한 확인',
		step4: 'Step 4/5 Umbraco 보안설정 확인',
		step5: 'Step 5/5 Umbraco를 시작할 준비가 되었습니다.',
		thankYou: 'Umbraco를 선택해주셔서 감사합니다.',
		theEndBrowseSite: '<h3>새 사이트 보기</h3>\n      Runway가 설치되었습니다, 새 웹사이트를 볼 수 있습니다.',
		theEndFurtherHelp:
			'<h3>고급 도움말과 정보</h3>\n     우수 커뮤니티에서 도음을 받으세요. 간단한 사이트제작이나 패키지 사용법, Umbraco기술의 퀵가이드를 제공하는 문서를 보시거나 무료 비디오를 시청하세요.',
		theEndHeader: 'Umbraco %0% 가 설치되어 사용준비가 되었습니다.',
		theEndInstallSuccess:
			'<strong>Umbraco 와 첫만남</strong>이시면 <br />아래의 "Umbraco 접속하기" 버튼을 클릭하여 <strong>즉시 시작</strong>하실 수 있습니다.\n    시작페이지에서 풍부한 리소소를 제공받을 수 있습니다.',
		theEndOpenUmbraco:
			'<h3>Umbraco 실행</h3>\n사이트 관리를 위해서 Umbraco 관리자를 여시고 컨텐츠를 추가하시거나 템플릿과 스타일시트 업데이트 또는 새기능을 추가하세요',
		Unavailable: '데이터베이스에 연결 실패',
		Version3: 'Umbraco 버전 3',
		Version4: 'Umbraco 버전 4',
		watch: '보기',
		welcomeIntro:
			'이 마법사는 버전 3.0에서 <strong>Umbraco %0%</strong> 로 신규설치나 업그레이드가 가능하도록 도와줍니다.\n                              <br /><br />\n                              마법사를 시작하시려면 <strong>"다음"</strong> 을 누르세요.',
	},
	language: {
		cultureCode: '국가 코드',
		displayName: '국가명',
	},
	lockout: {
		lockoutWillOccur: "TRANSLATE ME: 'You've been idle and logout will automatically occur in'",
		renewSession: "TRANSLATE ME: 'Renew now to save your work'",
	},
	login: {
		greeting0: '환영합니다',
		greeting1: '환영합니다',
		greeting2: '환영합니다',
		greeting3: '환영합니다',
		greeting4: '환영합니다',
		greeting5: '환영합니다',
		greeting6: '환영합니다',
		bottomText:
			'<p style="text-align:right;">&copy; 2001 - %0% <br /><a href="https://umbraco.com" style="text-decoration: none" target="_blank" rel="noopener">umbraco.com</a></p> ',
	},
	main: {
		dashboard: '대시보드',
		sections: '세부항목',
		tree: '컨텐츠',
	},
	moveOrCopy: {
		choose: '페이지 상단 선택...',
		copyDone: '%0% 가 %1%로 복사되었습니다.',
		copyTo: '%0%문서가 복사될 곳을 선택하세요',
		moveDone: '%0% 가 %1%로 이동되었습니다.',
		moveTo: '%0%문서가 이동할 곳을 선택하세요',
		nodeSelected: '새 컨텐츠의 루트로 선택되었습니다. 확인을 클릭하세요',
		noNodeSelected: '아직 노드가 선택되지 않았습니다, 확인 버튼을 누르기전에 리스트에 노드를 선택하세요.',
		notAllowedByContentType: '현재노드는 타입때문에 선택된 노드아래로 갈 수 없습니다.',
		notAllowedByPath: '현재 노드는 서브페이지로 이동할 수 없습니다.',
		notValid:
			"TRANSLATE ME: 'The action isn't allowed since you have insufficient permissions on 1 or more child documents.'",
	},
	notifications: {
		editNotifications: '%0% 에 대한 알림 편집',
		mailBody:
			"\n      안녕하세요 %0%\n\n      사용자 '%3%' 가  작업 '%1%' 를 페이지 '%2%' 에서\n      진행했음을 알리는 자동 발송 메일입니다.\n\n      편집하시려면 http://%4%/#/content/content/edit/%5% 로 이동하세요\n\n      좋은 하루 되세요!\n\n    ",
		mailBodyHtml:
			'<p>안녕하세요 %0%</p>\n\n\t  <p>사용자 <strong>\'%3%\'</strong> 가  작업 <strong>\'%1%\'</strong> 를\n       페이지 <a href="http://%4%/actions/preview.aspx?id=%5%"><strong>\'%2%\'</strong></a> 에서\n       진행했음을 알리는 자동 발송 메일입니다.\n  </p>\n\t  <div style="margin: 8px 0; padding: 8px; display: block;">\n\t\t\t<br />\n\t\t\t<a style="color: white; font-weight: bold; background-color: #5372c3; text-decoration : none; margin-right: 20px; border: 8px solid #5372c3; width: 150px;" href="http://%4%/#/content/content/edit/%5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;편집&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> &nbsp;\n\t\t\t<br />\n\t  </div>\n\t  <p>\n\t\t  <h3>업데이트 요약:</h3>\n\t\t  <table style="width: 100%;">\n\t\t\t\t\t   %6%\n\t\t\t</table>\n\t\t </p>\n\n\t  <div style="margin: 8px 0; padding: 8px; display: block;">\n\t\t\t<br />\n\t\t\t<a style="color: white; font-weight: bold; background-color: #5372c3; text-decoration : none; margin-right: 20px; border: 8px solid #5372c3; width: 150px;" href="http://%4%/#/content/content/edit/%5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;편집&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> &nbsp;\n\t\t\t<br />\n\t  </div>\n\n\t  <p>좋은 하루 되세요!<br /><br />\n\t  </p>',
		mailSubject: '%1%에 대한 [%0]알림이 %2%에 생성되었습니다',
		notifications: '알림',
	},
	packager: {
		chooseLocalPackageText:
			'\n    사용하시는 PC에서 패키지를 선택하세요<br />\n       Umbraco 패키지는 보통 ".umb" 나 ".zip" 확장자를 가집니다.\n    ',
		packageAuthor: '저자',
		packageDocumentation: '문서화',
		packageMetaData: '패키지 메타데이터',
		packageName: '패키지 이름',
		packageNoItemsHeader: '패키지가 포함한 아이템이 없습니다.',
		packageNoItemsText:
			'이 패키지엔 삭제할 아이템이 포함되어 있지 않습니다.<br/><br/>\n    아래 "패키지 삭제"를 클릭하시면 안전하게 시스템에서 삭제하실 수 있습니다.',
		packageOptions: '패키지 옵션',
		packageReadme: '패키지 정보',
		packageRepository: '패키지 저장소',
		packageUninstallConfirm: '삭제 확인',
		packageUninstalledHeader: '패키지가 삭제되었습니다.',
		packageUninstalledText: '패키지가 성공적으로 삭제되었습니다.',
		packageUninstallHeader: '패키지 삭제',
		packageUninstallText:
			'삭제하시려는 항목은 선택하지 않을 수 있습니다. "삭제 확인" 버튼을 누를때 체크되어있지 항목은 모두 삭제됩니다.<br />\n    <span style="color: Red; font-weight: bold;">알림:</span> 문서, 미디어등 삭제항목에 관련된 모든 항목이 삭제됩니다, 작업을 중단하면 시스템이 불안정적으로 동작할 수 있습니다.\n    삭제는 매우 주의를 요하기 때문에 의심스러운항목은 패키지 제작자에게 문의하시기 바랍니다.',
		packageVersion: '패키지 버전',
	},
	paste: {
		doNothing: '포맷을 포함여하 붙여넣기(권장하지 않음)',
		errorMessage:
			'붙여넣으려는 텍스트에 특수한 문자나 포맷이 포함되어있습니다. Microsoft Word문서에서 바로 복사해와서 문제가 발생된것일 수 있습니다. Umbraco는 붙여넣으려는 컨텐츠가 웹에 적합하도록 특수한 문자나 포맷을 자동으로 제거합니다',
		removeAll: '포맷을 전혀 적용하지 않고 붙여넣기',
		removeSpecialFormattering: '포맷을 제거하고 붙여넣기(권장)',
	},
	publicAccess: {
		paAdvanced: '역할 기반 제한',
		paAdvancedHelp: '역할 기반인증을 사용하여 컨트롤 접근제한을 설정하시려면,<br /> Umbraco의 사용자그룹을 사용하세요.',
		paAdvancedNoGroups: '역할 기반인증을 사용하시기전에 <br />사용자 그룹부터 생성해야합니다.',
		paErrorPage: '에러 페이지',
		paErrorPageHelp: '로그인을 시도할 때 접근할 수 없습니다.',
		paHowWould: '이페이지의 접근제한을 어떻게 제한할지 선택하세요',
		paIsProtected: '%0% 제한되었습니다.',
		paIsRemoved: '%0% 의 제한이 제거되었습니다',
		paLoginPage: '로그인 페이지',
		paLoginPageHelp: '로그인 폼 양식페이지를 선택하세요',
		paRemoveProtection: '제한 제거',
		paSelectPages: '로그인 폼과 에러메세지가 포함된 페이지를 선택하세요',
		paSelectRoles: '이 페이지에 접근할 역할을 선택하세요',
		paSetLogin: '이 페이지에 로그인과 암호 설정',
		paSimple: '사용자 제한',
		paSimpleHelp: '로그인과 암호를 이용해 사용자 제한',
	},
	publish: {
		contentPublishedFailedByEvent: '제3공급자 익스텐션 취소때문에 %0% 가 발행할 수없습니다.',
		includeUnpublished: '미발행된 자식 문서 포함',
		inProgress: '발행 진행중 - 잠시만 기다리세요...',
		inProgressCounter: '%1% 페이지를 제외한 %0% 가 발행됨...',
		nodePublish: '%0% 발행됨',
		nodePublishAll: '%0% 과 서브페이지가 발행되었습니다',
		publishAll: '%0% 와 모든 서브페이지 발행',
		publishHelp:
			"<strong>%0%</strong>를 발행하기위해 <em>확인</em>를 클릭하세요 and thereby making it's content publicly available.<br/><br />\n    이 페이지와 모든 서브페이지를 아래 <em>모든 자식문서 발행</em>을 체크하여 발행할 수 있습니다.\n    ",
	},
	relatedlinks: {
		addExternal: '외부링크 추가',
		addInternal: '내부링크 추가',
		addlink: '추가',
		caption: '설명',
		internalPage: '내부 페이지',
		linkurl: 'URL',
		modeDown: '아래로 이동',
		modeUp: '위로 이동',
		newWindow: '새 창 열기',
		removeLink: '링크 삭제',
	},
	rollback: {
		diffHelp:
			'현재 버전과 선택한 버전의 차이점을 보여줍니다<br /><del>빨간</del> 텍스트는 선택한 버전에선 보이지 않습니다. <ins>녹색은 추가되었음을 의미합니다</ins>',
		documentRolledBack: '문서가 롤백되었습니다.',
		htmlHelp: '선택한 버전을 html로 보여줍니다. 두 버전의 차이점을 동시에 보시려면, 차이점 보기를 사용하세요',
		rollbackTo: '롤백',
		selectVersion: '버전 선택',
		view: '보기',
	},
	scripts: {
		editscript: '스크립트 파일 편집',
	},
	sections: {
		concierge: '안내',
		content: '컨텐츠',
		courier: '가이드',
		developer: '개발도구',
		installer: 'Umbraco 설치마법사',
		media: '미디어',
		member: '구성원',
		newsletters: '뉴스레터',
		settings: '세팅',
		statistics: '통계',
		translation: '변환',
		users: '사용자',
	},
	settings: {
		defaulttemplate: '기본 템플릿',
		importDocumentTypeHelp:
			'문서를 가져오시려면 사용하시는 컴퓨터에 ".udt"를 찾아 선택하시고 "가져오기"를 클릭하세요(다음 단계에서 확인여부를 문의합니다)',
		newtabname: '새 색인 제목',
		nodetype: '노드타입',
		objecttype: '타입',
		stylesheet: '스타일시트',
		tab: '색인',
		tabname: '색인 제목',
		tabs: '색인',
	},
	sort: {
		sortOrder: 'Sort order',
		sortCreationDate: 'Creation date',
		sortDone: '정렬 완료',
		sortHelp:
			'다른 아이템을 마우스로 위,아래로 드래그 하여 이동하거나 열의 헤더를 클릭하여 아이템을 정렬할 수 있습니다',
		sortPleaseWait: '잠시 기다리십시오. 아이템을 정렬 하는데 잠시 시간이 소요될 수 있습니다',
	},
	speechBubbles: {
		contentPublishedFailedByEvent: '3rd party add-in 때문에 발행이 취소되었습니다.',
		contentTypeDublicatePropertyType: '속성타입이 이미존재합니다',
		contentTypePropertyTypeCreated: '속성타입 생성되었습니다',
		contentTypePropertyTypeCreatedText: '이름: %0% <br /> 데이터타입: %1%',
		contentTypePropertyTypeDeleted: '속성타입 삭제됨',
		contentTypeSavedHeader: '컨텐츠타입 저장됨',
		contentTypeTabCreated: '색인 생성',
		contentTypeTabDeleted: '색인 삭제',
		contentTypeTabDeletedText: 'Tab with id: %0% 삭제됨',
		cssErrorHeader: '스타일시트 저장되지 않음',
		cssSavedHeader: '스타일시트 저장',
		cssSavedText: '스타일시트 에러없이 저장',
		dataTypeSaved: '데이터타입 저장됨',
		dictionaryItemSaved: '사전 항목 저장됨',
		editContentPublishedFailedByParent: '부모페이지가 발행되지 않았기때문에 발행에 실패했습니다.',
		editContentPublishedHeader: '컨텐츠 발행됨',
		editContentPublishedText: 'and 웹사이트에서 보기',
		editContentSavedHeader: '컨텐츠 저장됨',
		editContentSavedText: '변경된 내용이 적용되어 발행됨을 기억하세요',
		editContentSendToPublish: '승인을 위해 전송',
		editContentSendToPublishText: '변경사항이 승인을 위해 전송되었습니다.',
		editMemberSaved: '사용자 저장됨',
		editStylesheetPropertySaved: '스타일시트 속성 저장됨',
		editStylesheetSaved: '스타일시트 저장됨',
		editTemplateSaved: '템플릿 저장됨',
		editUserError: '사용자 저장에러(로그 확인)',
		editUserSaved: '사용자 저장됨',
		fileErrorHeader: '파일 저장되지 않음',
		fileErrorText: '파일이 저장되지 않았습니다. 권한을 확인하세요',
		fileSavedHeader: '파일 저장',
		fileSavedText: '파일이 에러없이 저장',
		languageSaved: '언어 저장됨',
		templateErrorHeader: '템플릿이 저장되지 않음',
		templateErrorText: '2 템플릿에 동일한 별칭이 적용되지 않았는지 확인하시기 바랍니다.',
		templateSavedHeader: '템플릿 저장',
		templateSavedText: '탬플릿이 에러없이 저장되었습니다!',
	},
	stylesheet: {
		aliasHelp: 'CSS 태그를 사용하세요 예: h1, .redHeader, .blueTex',
		editstylesheet: '스타일시트 편집',
		editstylesheetproperty: '스타일시트 속성편집',
		nameHelp: 'rich text editor 에 스타일속성을 확인할 수 있는 이름을 붙이세요',
		preview: '미리보기',
		styles: '스타일',
	},
	template: {
		edittemplate: '템플릿 편집',
		insertContentArea: '컨텐츠범위 삽입',
		insertContentAreaPlaceHolder: '컨텐츠범위 Placeholder 삽입',
		insertDictionaryItem: '사전 항목 삽입',
		insertMacro: '매크로 삽입',
		insertPageField: 'Umbraco 페이지필드 삽입',
		mastertemplate: '마스터 템플릿',
		quickGuide: 'Umbraco 템플릿태그 퀵가이드',
		template: '템플릿',
	},
	grid: {
		media: 'Image',
		macro: 'Macro',
		insertControl: 'Choose type of content',
		chooseLayout: 'Choose a layout',
		addRows: 'Add a row',
		addElement: 'Add content',
		dropElement: 'Drop content',
		settingsApplied: 'Settings applied',
		contentNotAllowed: 'This content is not allowed here',
		contentAllowed: 'This content is allowed here',
		clickToEmbed: 'Click to embed',
		clickToInsertImage: 'Click to insert image',
		placeholderWriteHere: 'Write here...',
		gridLayouts: 'Grid Layouts',
		gridLayoutsDetail:
			'Layouts are the overall work area for the grid editor, usually you only need one or two different layouts',
		addGridLayout: 'Add Grid Layout',
		addGridLayoutDetail: 'Adjust the layout by setting column widths and adding additional sections',
		rowConfigurations: 'Row configurations',
		rowConfigurationsDetail: 'Rows are predefined cells arranged horizontally',
		addRowConfiguration: 'Add row configuration',
		addRowConfigurationDetail: 'Adjust the row by setting cell widths and adding additional cells',
		columns: 'Columns',
		columnsDetails: 'Total combined number of columns in the grid layout',
		settings: 'Settings',
		settingsDetails: 'Configure what settings editors can change',
		styles: 'Styles',
		stylesDetails: 'Configure what styling editors can change',
		allowAllEditors: 'Allow all editors',
		allowAllRowConfigurations: 'Allow all row configurations',
	},
	templateEditor: {
		alternativeField: '대체 필드',
		alternativeText: '대체 글꼴',
		casing: 'Casing',
		chooseField: '필드 선택',
		convertLineBreaks: '줄바꿈문자 변환',
		convertLineBreaksHelp: '줄바꿈문자를 Html태그 &amp;lt;br&amp;gt; 로 변경',
		dateOnly: '예, 날짜만',
		formatAsDate: '날짜포맷으로',
		htmlEncode: 'HTML 인코딩',
		htmlEncodeHelp: 'HTML과 동일하게 특수문자를 변경하시겠습니까',
		insertedAfter: '필드 값 후에 삽입하시겠습니까',
		insertedBefore: '필드값 전에 삽입하시겠습니까',
		lowercase: '소문자',
		none: '없음',
		postContent: '필드뒤에 삽입',
		preContent: '필드앞에 삽입',
		recursive: 'Recursive',
		removeParagraph: '단락 태그삭제',
		removeParagraphHelp: '문서 시작과 끝의 &amp;lt;P&amp;gt; 를 삭제하시겠습니까',
		uppercase: '대문자',
		urlEncode: 'URL 인코딩',
		urlEncodeHelp: 'URL의 특수문자를 포맷하겠습니까',
		usedIfAllEmpty: '필드 위의 값들이 비었을때만 사용가능합니다.',
		usedIfEmpty: '이 필드는 최초필드가 비었을때만 사용가능합니다.',
		withTime: '예, 시간를 :로 구분하여',
	},
	translation: {
		details: '번역 세부항목',
		DownloadXmlDTD: '다운로드 xml DTD',
		fields: '필드',
		includeSubpages: '서브페이지 포함',
		mailBody:
			"\n      안녕하세요 %0%\n\n      %2% 에 의해 문서 '%1%' 가 '%5%' 로 번역요청되었음을\n      알리는 자동 발송 메일입니다.\n\n      편집하시려면 http://%3%/translation/details.aspx?id=%4% 로\n\n      번역작업을 전반적으로 보시려면 Umbraco에 로그인 하세요\n      http://%3%\n\n      좋은 하루 되세요!\n    ",
		noTranslators: '번역자를 찾을 수 없습니다. 컨텐츠를 번역하기위해 발송하시기 전에 번역자를 생성하세요.',
		pageHasBeenSendToTranslation: "'%0%' 페이지가 번역을 위해 전송되었습니다.",
		sendToTranslate: "번역을 위해 '%0%' 페이지 전송하기Send the page '%0%' to translation",
		totalWords: '총 단어 수',
		translateTo: '번역',
		translationDone: '번역 완료',
		translationDoneHelp:
			'아래를 클릭하셔서 방금 번역한 페이지를 미리볼 수 있습니다. 원본 페이지가 있다면 두 페이지를 비교해보시기 바랍니다.',
		translationFailed: '번역에 실패했습니다. Xml 파일에 문제가 있을수 있습니다.',
		translationOptions: '번역 옵션',
		translator: '번역자',
		uploadTranslationXml: '번역 XML 업로드',
	},
	treeHeaders: {
		cacheBrowser: '캐시 브라우저',
		contentRecycleBin: '휴지통',
		createdPackages: '생성된 패키지',
		dataTypes: '데이터 타입',
		dictionary: '사전',
		installedPackages: '설치된 패키지',
		installSkin: "TRANSLATE ME: 'Install skin'",
		installStarterKit: "TRANSLATE ME: 'Install starter kit'",
		languages: '언어',
		localPackage: '로컬 패키지 설치',
		macros: '매크로',
		mediaTypes: '미디어 타입',
		member: '구성원',
		memberGroups: '구성원 그룹',
		memberRoles: '역할',
		memberTypes: '구성원 유형',
		packager: '패키지',
		packages: '패키지',
		repositories: '저장소에 설치',
		runway: 'Runway 설치',
		runwayModules: 'Runway 모듈',
		scripting: '스크립트 파일',
		scripts: '스크립트',
		stylesheets: '스타일시트',
		templates: '템플릿',
		userPermissions: '사용자권한',
		userTypes: '사용자 유형',
		users: '사용자',
	},
	update: {
		updateAvailable: '새 업데이트가 준비되었습니다.',
		updateDownloadText: '%0% 가 준비되었습니다. 다운로드를 위해 여기를 클릭하세요',
		updateNoServer: '연결할 서버가 없습니다연결할 서버가 없습니다',
		updateNoServerError: '업데이트을 위해 에러를 체크합니다 더많은 정보를 보시려면 stack 추적을 하세요',
	},
	user: {
		administrators: '관리자',
		categoryField: '카테고리 필드',
		changePassword: 'Change Your Password',
		changePasswordDescription:
			"You can change your password for accessing the Umbraco backoffice by filling out the form below and click the 'Change Password' button",
		contentChannel: '컨텐츠 채널',
		descriptionField: '설명 필드',
		disabled: '사용자 비활성화',
		documentType: '문서 타입',
		editors: '편집자',
		excerptField: '필드 발췌',
		language: '언어',
		loginname: '로그인',
		mediastartnode: '미디어 라이브러리에 시작노드',
		modules: '세부항목',
		noConsole: 'Umbraco 접속 비활성화',
		password: '비밀번호',
		passwordChanged: 'Your password has been changed!',
		passwordConfirm: 'Please confirm the new password',
		passwordEnterNew: 'Enter your new password',
		passwordIsBlank: 'Your new password cannot be blank!',
		passwordIsDifferent:
			'There was a difference between the new password and the confirmed password. Please try again!',
		passwordMismatch: "The confirmed password doesn't match the new password!",
		permissionReplaceChildren: '자식노드 권한변경',
		permissionSelectedPages: '현재 이페이지의 권한을 수정하는 중입니다:',
		permissionSelectPages: '권한변경할 페이지를 선택해주세요',
		searchAllChildren: '하위항목 모두찾기',
		startnode: '컨텐츠의 시작노드',
		username: '사용자명',
		userPermissions: '사용자권한',
		usertype: '사용자 타입',
		userTypes: '사용자 타입',
		writer: '작성자',
	},
	logViewer: {
		selectAllLogLevelFilters: '모두 선택',
		deselectAllLogLevelFilters: '모두 선택 해제',
	},
} as UmbLocalizationDictionary;
