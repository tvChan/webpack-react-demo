import React from 'react';
// 自定义一个ajax方法，非常简单，支持promise
import {get} from '../utils/ajax';

export default class Plist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"loading": false, "list": []};
	}
	// 当初初次渲染完毕，设置该组件的属性firstView为true
	componentDidMount() {
		this.setState({'firstView':true});
	}
	componentWillReceiveProps(nextProps) {
		let keyword = nextProps.keyword;
		// loading设为true,firstView设为false
		this.setState({'loading':true,'firstView':false});
		let url = 'https://api.github.com/search/users?q=${keyword}';
		// 发起ajax请求
		get(url).then((data) => {
			// 更新本组件的state
			this.setState({"loading":false, "list": data.items});
		}).catch((error) => {
			console.error(error);
		});
	}

	render() {
		const imgStyle = {
			width: '50px'
		}
		// 天假一些if else 的判断，用来展示不同的内容
		if (this.state.firstView) {
			return (
				<h2>Enter name to Search</h2>
			);
		}
		if (this.state.loading) {
			return (
				<h2>Loading result...</h2>
			);
		} else {
			if (this.state.list.length === 0) {
				return (
					<h2>No result.</h2>
				);
			} else {
				return (
					<div className="row">
						{this.state.list.map(people => {
							return (
								<div className="card">
									<img src={people.avatar_url} style={imgStyle}/>
									<p className="card-text">
										{people.login}
									</p>
								</div>
							)
						})}
					</div>
				);
			}
		}
	}
}